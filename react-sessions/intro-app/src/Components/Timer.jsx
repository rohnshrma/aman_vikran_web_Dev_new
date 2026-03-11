// Import React and the `useState` Hook.
// `useState` lets this component remember values between renders.
import React, { useState } from "react";

// `Timer` is a functional component that displays the current time.
const Timer = () => {
  // `time` stores the current time string.
  // The initial value is created from JavaScript's `Date` object.
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // This function updates the state with the latest current time.
  // Calling `setTime` tells React to re-render the component.
  const fetchTimeHandler = () => {
    setTime(new Date().toLocaleTimeString());
  };

  // This schedules `fetchTimeHandler` to run every 1000 milliseconds.
  // Concept note: placing `setInterval` directly inside the component body
  // means a new interval is created on every render. In production React code,
  // this is usually handled inside `useEffect` to avoid duplicate intervals.
  setInterval(fetchTimeHandler, 1000);

  // Return the JSX UI for the timer.
  return (
    // Outer wrapper `div`.
    <div>
      {/* Bootstrap utility classes handle layout, spacing, and styling. */}
      <div className="container p-5 text-center shadow">
        {/* Display the current `time` state inside a heading. */}
        <h1>{time}</h1>

        {/* This button is commented out because the timer updates automatically. */}
        {/* <button onClick={fetchTimeHandler} className="btn btn-lg btn-success">
          Fetch Time
        </button> */}
      </div>
    </div>
  );
};

// Export the component so App.jsx can import and use it.
export default Timer;
