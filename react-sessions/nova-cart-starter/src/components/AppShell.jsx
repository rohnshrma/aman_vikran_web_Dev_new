import { Link } from "react-router-dom";

export function AppShell({ children }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="brand-kicker">NovaCart</p>
          <h1 className="brand-title">E-Commerce Starter Kit</h1>
        </div>

        <nav className="topbar-links" aria-label="Preview sections">
          <Link to="/products">Products</Link>
          <Link to="/add-product">Add Product</Link>
          <Link to="/admin/products">Admin</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <main className="page-stack">{children}</main>
    </div>
  );
}
