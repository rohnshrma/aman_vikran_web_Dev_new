export function AppShell({ children }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="brand-kicker">Foodly</p>
          <h1 className="brand-title">Starter Classroom UI</h1>
        </div>

        <nav className="topbar-links" aria-label="Preview sections">
          <a href="#dishes">All Dishes</a>
          <a href="#dish-details">Dish Page</a>
          <a href="#add-dish">Add Dish</a>
          <a href="#admin">Admin</a>
          <a href="#cart">Cart</a>
        </nav>
      </header>

      <main className="page-stack">{children}</main>
    </div>
  );
}
