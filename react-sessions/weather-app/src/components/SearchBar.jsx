function SearchBar({ value, onChange, onSearch, recentCities, onPickRecent }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') onSearch();
  };

  return (
    <section className="search-section">
      <div className="search-bar">
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search city (e.g. Delhi, London, Tokyo)"
          aria-label="Search city"
        />
        <button onClick={onSearch}>Search</button>
      </div>

      {recentCities.length > 0 && (
        <div className="recent-cities">
          <span>Recent:</span>
          {recentCities.map((city) => (
            <button key={city} className="chip" onClick={() => onPickRecent(city)}>
              {city}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export default SearchBar;
