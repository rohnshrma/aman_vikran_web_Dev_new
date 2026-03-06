// Import React for JSX support and clarity for first-time learners.
import React from "react";

// About is a reusable presentational component.
// props is an object that contains data passed from the parent component.
const About = (props) => {
  // Useful for beginners: inspect incoming props in the browser console.
  // Example output: { title: "About Section", description: "this is about section" }
  console.log(props);

  // Return JSX that describes this component's UI.
  return (
    // className is used instead of class because class is a JS keyword.
    <div className="about">
      {/* Inject dynamic text from props using {} in JSX. */}
      <h2>{props.title}</h2>

      {/* Another dynamic field from props. */}
      <p>{props.description}</p>

      {/* Static button text. */}
      <button>READ MORE</button>
    </div>
  );
};

// Export About so App.jsx can import and use it.
export default About;
