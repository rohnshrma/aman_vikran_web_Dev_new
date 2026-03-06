// Import React so JSX can be transformed into React function calls.
// In modern React setups this import is sometimes optional, but keeping it
// is useful for beginners so they can clearly see React is being used.
import React from "react";

// Import a child component that we will reuse multiple times.
import About from "./Components/About";

// Import global CSS so styles are applied to this app.
import "./App.css";

// A React component is just a JavaScript function that returns JSX.
// By convention, component names start with a capital letter.
const App = () => {
  // return tells React what UI this component should render.
  return (
    // <>...</> is a Fragment.
    // It groups multiple elements without adding an extra <div> to the DOM.
    <>
      {/* A heading element rendered by the App component. */}
      <h1>hello world</h1>

      {/* A paragraph element rendered below the heading. */}
      <p>my react app</p>

      {/*
        Reusing the same About component with different prop values.
        props are like custom inputs/arguments passed from parent to child.
      */}
      <About title="About Section" description="this is about section" />

      {/*
        Rendering a second card from the same component.
        This demonstrates component reusability.
      */}
      <About title="Contact Section" description="this is Contact section" />

      {/*
        Concept note:
        JSX component usage <About ... /> is similar to calling a function,
        but React handles the call and rendering lifecycle for us.
      */}
      {/* About({ title: "about section", description: "this is about section" }) */}
    </>
  );
};

// Export App so other files (like Main.jsx) can import and render it.
export default App;
