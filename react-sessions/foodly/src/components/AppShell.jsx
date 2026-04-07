import { Link } from "react-router-dom";

export function AppShell({ children }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="brand-kicker">Foodly</p>
          <h1 className="brand-title">Starter Classroom UI</h1>
        </div>

        <nav className="topbar-links" aria-label="Preview sections">
          <Link to="/dishes">All Dishes</Link>
          <Link to="/dish">Dish Page</Link>
          <Link to="/add-dish">Add Dish</Link>
          <Link to="/admin/manage">Admin</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <main className="page-stack">{children}</main>
    </div>
  );
}
