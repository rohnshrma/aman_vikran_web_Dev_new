import { useEffect, useMemo, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import ErrorMessage from './components/Error';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const countryNames = new Intl.DisplayNames(['en'], { type: 'region' });

const pickDailyForecast = (forecastList = []) => {
  const grouped = {};

  forecastList.forEach((item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(item);
  });

  return Object.values(grouped)
    .slice(0, 5)
    .map((day) => {
      const noonItem = day.find((entry) => entry.dt_txt.includes('12:00:00')) ?? day[0];
      return noonItem;
    });
};

const getWeatherClass = (main = '') => {
  const key = main.toLowerCase();
  if (key.includes('cloud')) return 'weather-clouds';
  if (key.includes('rain') || key.includes('drizzle')) return 'weather-rain';
  if (key.includes('snow')) return 'weather-snow';
  if (key.includes('thunder')) return 'weather-thunderstorm';
  if (key.includes('mist') || key.includes('fog') || key.includes('haze')) return 'weather-mist';
  return 'weather-clear';
};

function App() {
  const [searchInput, setSearchInput] = useState('Delhi');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [recentCities, setRecentCities] = useState(() => {
    const saved = localStorage.getItem('recent-cities');
    return saved ? JSON.parse(saved) : [];
  });

  const backgroundClass = useMemo(
    () => `${theme} ${getWeatherClass(weather?.weather?.[0]?.main)}`,
    [theme, weather]
  );

  const saveRecentCity = (cityName) => {
    setRecentCities((prev) => {
      const updated = [cityName, ...prev.filter((city) => city.toLowerCase() !== cityName.toLowerCase())].slice(0, 5);
      localStorage.setItem('recent-cities', JSON.stringify(updated));
      return updated;
    });
  };

  const fetchForecastByCoords = async (lat, lon) => {
    const res = await fetch(
      `${FORECAST_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) throw new Error('Unable to fetch forecast');
    const data = await res.json();
    setForecast(pickDailyForecast(data.list));
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch(
        `${WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) throw new Error('Unable to fetch weather for your location');

      const data = await res.json();
      setWeather(data);
      setSearchInput(data.name);
      saveRecentCity(data.name);
      await fetchForecastByCoords(lat, lon);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchWeatherByCity = async (cityName, shouldSave = true) => {
    if (!cityName.trim()) {
      setError('Please enter a city name');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const weatherRes = await fetch(
        `${WEATHER_BASE_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
      );

      if (weatherRes.status === 404) {
        setWeather(null);
        setForecast([]);
        throw new Error('City Not Found');
      }

      if (!weatherRes.ok) throw new Error('Unable to fetch weather data');

      const weatherData = await weatherRes.json();
      setWeather(weatherData);
      if (shouldSave) saveRecentCity(weatherData.name);

      await fetchForecastByCoords(weatherData.coord.lat, weatherData.coord.lon);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Keep a live clock on the card for better UX.
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    // Update tab title dynamically so users can quickly glance weather info.
    if (weather) {
      document.title = `${Math.round(weather.main.temp)}°C in ${weather.name} | Weather App`;
    } else {
      document.title = 'Modern Weather App';
    }
  }, [weather]);

  useEffect(() => {
    // Debounce city input to avoid rapid API calls while the user types.
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchInput.trim());
    }, 650);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  useEffect(() => {
    if (!API_KEY) {
      setError('Missing API key. Add VITE_OPENWEATHER_API_KEY to .env');
      return;
    }

    fetchWeatherByCity('Delhi', false);

    // Bonus: try user geolocation after initial city load attempt.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        () => {
          // Fail silently and keep Delhi data if permission is denied.
        }
      );
    }
  }, []);

  useEffect(() => {
    if (!debouncedQuery || debouncedQuery.toLowerCase() === weather?.name?.toLowerCase()) return;
    fetchWeatherByCity(debouncedQuery);
  }, [debouncedQuery]);

  const handleSubmitSearch = () => {
    if (!searchInput.trim()) {
      setError('Please enter a city name');
      return;
    }
    fetchWeatherByCity(searchInput.trim());
  };

  const countryLabel = weather?.sys?.country ? countryNames.of(weather.sys.country) : '';

  return (
    <div className={`app ${backgroundClass}`}>
      <div className="background-overlay" />
      <main className="weather-container">
        <div className="top-bar">
          <h1>Weather Pulse</h1>
          <button
            className="theme-toggle"
            onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>

        <SearchBar
          value={searchInput}
          onChange={setSearchInput}
          onSearch={handleSubmitSearch}
          recentCities={recentCities}
          onPickRecent={fetchWeatherByCity}
        />

        {isLoading && <Loader />}
        {!isLoading && error && <ErrorMessage message={error} />}
        {!isLoading && !error && weather && (
          <WeatherCard
            weather={weather}
            forecast={forecast}
            countryLabel={countryLabel}
            currentTime={currentTime}
          />
        )}
      </main>
    </div>
  );
}

export default App;
