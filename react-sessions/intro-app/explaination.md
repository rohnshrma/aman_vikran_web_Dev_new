# React First Class Explanation

This file explains the current project code in a beginner-friendly way.

## 1) `src/Main.jsx` - App Entry Point

```jsx
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

Explanation:
- `createRoot` comes from `react-dom/client` and is used to mount a React app.
- `App` is the top-level component.
- `document.getElementById("root")` selects the DOM node from `index.html`.
- `createRoot(...)` tells React where to control the UI.
- `root.render(<App />)` renders the `App` component inside that DOM node.

Core concept:
- React builds UI with components.
- `Main.jsx` connects the React world to the real browser DOM.

## 2) `src/App.jsx` - Parent Component

```jsx
import React from "react";
import About from "./Components/About";
import "./App.css";

const App = () => {
  return (
    <>
      <h1>hello world</h1>
      <p>my react app</p>
      <About title="About Section" description="this is about section" />
      <About title="Contact Section" description="this is Contact section" />
    </>
  );
};

export default App;
```

Explanation:
- Imports:
  - `React`: needed for JSX understanding and clarity.
  - `About`: child component reused in this file.
  - `./App.css`: global styles.
- `App` is a function component.
- `return (...)` gives JSX (UI structure).
- `<>...</>` is a Fragment, used when we need multiple elements without extra wrapper tags in HTML.
- `<About ... />` is the same component reused with different `props`.

Core concept:
- Component reusability: same component, different data.

## 3) `src/Components/About.jsx` - Reusable Child Component

```jsx
import React from "react";

const About = (props) => {
  console.log(props);
  return (
    <div className="about">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>READ MORE</button>
    </div>
  );
};

export default About;
```

Explanation:
- `props` is an object passed from parent (`App`).
- `console.log(props)` helps you inspect passed data while learning.
- `{props.title}` and `{props.description}` are dynamic values rendered in JSX.
- `className` is used in JSX instead of HTML's `class`.

Core concept:
- Data flows from parent to child through props.

## 4) `src/App.css` - Basic Global Styling

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: thistle;
}
```

Explanation:
- `*` applies styles to all elements.
- Resetting `padding` and `margin` avoids inconsistent default spacing.
- `box-sizing: border-box` makes sizing easier to reason about.
- `body` background color affects the whole page.

Core concept:
- CSS controls visual presentation; React controls UI structure and behavior.

## Quick Vocabulary

- Component: Reusable UI function.
- JSX: HTML-like syntax inside JavaScript.
- Props: Inputs sent from one component to another.
- Render: Process of showing components in the browser.
- DOM: Browser representation of the page structure.
