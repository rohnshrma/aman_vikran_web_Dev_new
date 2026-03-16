// Import React so JSX can be transformed into React elements.
// `useState` is a React Hook used to store and update component state.
import React, { useState } from "react";

// Import a child component from the Components folder.
// This component is currently shown only in commented examples below.
import About from "./Components/About";

// Import Bootstrap's prebuilt CSS utility and component classes.
import "bootstrap/dist/css/bootstrap.min.css";
// Import custom app-level styles written in App.css.
import "./App.css";

// Import another child component that demonstrates state updates.
import Counter from "./Components/Counter";

// Import the Timer component that is currently being rendered on screen.
import Timer from "./Components/Timer";
import Form from "./Components/Form";

// `App` is a functional React component.
// Component names start with a capital letter so React treats them as components.
const App = () => {
  // `theme` stores the current theme value.
  // `setTheme` is the function React gives us to update that state.
  const [theme, setTheme] = useState("light");

  // This runs every time the App component renders.
  // It is useful for understanding re-renders while learning React.
  console.log("App Rendered");

  // This function toggles the theme between "light" and "dark".
  // The ternary operator is a short way to write an if/else expression.
  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // This object stores inline styles that depend on the current theme.
  // React accepts JavaScript objects in the `style` prop.
  const properties = {
    // Use dark text on a light background.
    color: theme === "light" ? "#333" : "#fff",
    // Use a dark background when the theme changes to dark mode.
    background: theme === "light" ? "#fff" : "#333",
  };

  // `return` provides the JSX that React should display for this component.
  return (
    // The outer `div` acts as the wrapper for the whole app UI.
    // `className` is used instead of `class` in JSX.
    // `style={properties}` applies the JavaScript style object above.
    <div className="app p-5" style={properties}>
      {/* This button switches the theme when clicked. */}
      <button
        // Template literals let us build a class name dynamically.
        // Bootstrap uses `btn-dark` and `btn-light` for button colors.
        className={`theme-toggler btn btn-${
          theme === "light" ? "dark" : "light"
        }`}
        // `onClick` attaches a click event handler in React.
        onClick={themeHandler}
      >
        {/* JSX can render values from JavaScript expressions inside `{}`. */}
        {theme === "light" ? "DARK" : "LIGHT"}
      </button>

      {/* A heading element rendered by the App component. */}
      {/* <h1>hello world</h1> */}

      {/* A paragraph element rendered below the heading. */}
      {/* <p>my react app</p> */}

      {/*
        Reusing the same About component with different prop values.
        props are like custom inputs/arguments passed from parent to child.
      */}
      {/* <About title="About Section" description="this is about section" /> */}

      {/*
        Rendering a second card from the same component.
        This demonstrates component reusability.
      */}
      {/* <About title="Contact Section" description="this is Contact section" /> */}

      {/*
        Concept note:
        JSX component usage <About ... /> is similar to calling a function,
        but React handles the call and rendering lifecycle for us.
      */}
      {/* About({ title: "about section", description: "this is about section" }) */}

      {/* This Counter component is currently disabled for the demo. */}
      {/* <Counter /> */}

      {/* Render the Timer component so it appears on the page. */}
      {/* <Timer /> */}

      <Form />
    </div>
  );
};

// Export this component so another file can import and render it.
export default App;
