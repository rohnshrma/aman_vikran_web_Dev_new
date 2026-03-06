// createRoot is the modern React DOM API for mounting a React app.
import { createRoot } from "react-dom/client";

// Import the top-level App component.
import App from "./App";

// document.getElementById("root") finds the <div id="root"></div> in index.html.
// createRoot connects React to that real DOM node.
const root = createRoot(document.getElementById("root"));

// Render the App component tree into the root container.
// <App /> means "create one App component instance".
root.render(<App />);
