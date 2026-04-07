import { AppShell } from "./components/AppShell";
import { AddDishPage } from "./pages/AddDishPage";
import { AdminManagePage } from "./pages/AdminManagePage";
import { CartPage } from "./pages/CartPage";
import { DishDetailsPage } from "./pages/DishDetailsPage";
import { DishesPage } from "./pages/DishesPage";

import { Routes, Route } from "react-router-dom";

import indianDishes from "./data.js";
import Hero from "./pages/Hero.jsx";

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dishes" element={<DishesPage dishes={indianDishes} />} />
        <Route path="/dish" element={<DishDetailsPage />} />
        <Route path="/add-dish" element={<AddDishPage />} />
        <Route path="/admin/manage" element={<AdminManagePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </AppShell>
  );
}

export default App;
