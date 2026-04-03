import { AppShell } from './components/AppShell';
import { AddDishPage } from './pages/AddDishPage';
import { AdminManagePage } from './pages/AdminManagePage';
import { CartPage } from './pages/CartPage';
import { DishDetailsPage } from './pages/DishDetailsPage';
import { DishesPage } from './pages/DishesPage';

function App() {
  return (
    <AppShell>
      <section className="hero-card">
        <div>
          <p className="eyebrow">Food Ordering Starter App</p>
          <h1>Modern minimal UI for a classroom food ordering project.</h1>
          <p className="hero-copy">
            This starter intentionally includes presentation only. Students should
            implement routing, state, CRUD, cart logic, API calls, validation, and
            authentication on top of these components.
          </p>
        </div>

        <div className="hero-note">
          <h2>Student Build Goals</h2>
          <ul>
            <li>Add new dishes</li>
            <li>Show all dishes</li>
            <li>View a single dish page</li>
            <li>Create admin edit and delete flows</li>
            <li>Add cart and cart total logic</li>
          </ul>
        </div>
      </section>

      <DishesPage />
      <DishDetailsPage />
      <AddDishPage />
      <AdminManagePage />
      <CartPage />
    </AppShell>
  );
}

export default App;
