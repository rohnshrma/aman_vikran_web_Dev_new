function Loader() {
  return (
    <div className="loader-wrap" role="status" aria-live="polite">
      <div className="spinner" />
      <p>Fetching weather updates...</p>
    </div>
  );
}

export default Loader;
