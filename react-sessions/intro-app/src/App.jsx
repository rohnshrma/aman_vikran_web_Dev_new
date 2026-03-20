import React, { useState } from "react";
import About from "./Components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
import Form from "./Components/Form";

const App = () => {
  const [theme, setTheme] = useState("light");

  console.log("App Rendered");

  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const properties = {
    color: theme === "light" ? "#333" : "#fff",
    background: theme === "light" ? "#fff" : "#333",
  };

  return (
    <div className="app p-5" style={properties}>
      <button
        className={`theme-toggler btn btn-${
          theme === "light" ? "dark" : "light"
        }`}
        onClick={themeHandler}
      >
        {theme === "light" ? "DARK" : "LIGHT"}
      </button>

      {/* <Form /> */}
      <Counter />
    </div>
  );
};

export default App;
