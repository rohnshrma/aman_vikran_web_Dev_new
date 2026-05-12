const weatherEmojiMap = {
  Clear: '☀️',
  Clouds: '☁️',
  Rain: '🌧️',
  Drizzle: '🌦️',
  Thunderstorm: '⛈️',
  Snow: '❄️',
  Mist: '🌫️',
  Haze: '🌫️',
};

function WeatherCard({ weather, forecast, countryLabel, currentTime }) {
  const {
    name,
    weather: weatherDetails,
    main,
    wind,
    sys,
  } = weather;

  const weatherInfo = weatherDetails?.[0] || {};
  const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;
  const emoji = weatherEmojiMap[weatherInfo.main] || '🌍';

  const toTime = (value) =>
    new Date(value * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <section className="weather-card">
      <header className="weather-header">
        <div>
          <h2>
            {name}, {countryLabel || sys.country}
          </h2>
          <p>{currentTime.toLocaleString()}</p>
        </div>
        <div className="weather-icon-wrap">
          <img src={iconUrl} alt={weatherInfo.description} />
          <span className="weather-emoji">{emoji}</span>
        </div>
      </header>

      <div className="temperature-row">
        <h3>{Math.round(main.temp)}°C</h3>
        <p>{weatherInfo.description}</p>
      </div>

      <div className="metric-grid">
        <article>
          <span>Feels Like</span>
          <strong>{Math.round(main.feels_like)}°C</strong>
        </article>
        <article>
          <span>Humidity</span>
          <strong>{main.humidity}%</strong>
        </article>
        <article>
          <span>Wind</span>
          <strong>{wind.speed} m/s</strong>
        </article>
        <article>
          <span>Min / Max</span>
          <strong>
            {Math.round(main.temp_min)}° / {Math.round(main.temp_max)}°C
          </strong>
        </article>
        <article>
          <span>Sunrise</span>
          <strong>{toTime(sys.sunrise)}</strong>
        </article>
        <article>
          <span>Sunset</span>
          <strong>{toTime(sys.sunset)}</strong>
        </article>
      </div>

      <div className="forecast">
        <h4>5-Day Forecast</h4>
        <div className="forecast-list">
          {forecast.map((item) => (
            <article className="forecast-item" key={item.dt}>
              <p>{new Date(item.dt * 1000).toLocaleDateString([], { weekday: 'short' })}</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather?.[0]?.icon}.png`}
                alt={item.weather?.[0]?.description}
              />
              <strong>{Math.round(item.main.temp)}°C</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;
