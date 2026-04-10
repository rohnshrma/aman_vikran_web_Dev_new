import { Routes, Route } from "react-router-dom";

import { AppShell } from "./components/AppShell";
import { AddDishPage } from "./pages/AddDishPage";
import { AdminManagePage } from "./pages/AdminManagePage";
import { CartPage } from "./pages/CartPage";
import { DishDetailsPage } from "./pages/DishDetailsPage";
import { DishesPage } from "./pages/DishesPage";
import Hero from "./pages/Hero";
import { cartPreviewItems, starterProducts } from "./data";

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/products"
          element={<DishesPage dishes={starterProducts} />}
        />
        <Route
          path="/product/:id"
          element={<DishDetailsPage dishes={starterProducts} />}
        />
        <Route path="/add-product" element={<AddDishPage />} />
        <Route
          path="/admin/products"
          element={<AdminManagePage products={starterProducts} />}
        />
        <Route path="/cart" element={<CartPage items={cartPreviewItems} />} />
      </Routes>
    </AppShell>
  );
}

export default App;
