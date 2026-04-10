import { AppShell } from "./components/AppShell";
import { AddDishPage } from "./pages/AddDishPage";
import { AdminManagePage } from "./pages/AdminManagePage";
import { CartPage } from "./pages/CartPage";
import { DishDetailsPage } from "./pages/DishDetailsPage";
import { DishesPage } from "./pages/DishesPage";

import { Routes, Route } from "react-router-dom";

import indianDishes from "./data.js";
import Hero from "./pages/Hero.jsx";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
function App() {
  const [dishes, setDishes] = useState(indianDishes);

  const addDishHandler = (dish) => {
    setDishes((prevDishes) => {
      return [...prevDishes, { ...dish, id: uuidV4() }];
    });
  };

  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dishes" element={<DishesPage dishes={dishes} />} />
        <Route path="/dish/:id" element={<DishDetailsPage dishes={dishes} />} />
        <Route
          path="/add-dish"
          element={<AddDishPage onAdd={addDishHandler} />}
        />
        <Route path="/admin/manage" element={<AdminManagePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </AppShell>
  );
}

export default App;
