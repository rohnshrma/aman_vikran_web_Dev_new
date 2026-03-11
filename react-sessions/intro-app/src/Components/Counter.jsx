// Import React and `useState` so this component can manage state.
import React, { useState } from "react";

// `Counter` is a component that displays and updates a number.
const Counter = () => {
  // This log helps show when the component renders again.
  console.log("counter re-rendered");

  // `useState(0)` creates state with an initial value of 0.
  // Array destructuring gives us the current value and its setter function.
  var [count, setCount] = useState(0);

  // Increase the count by 1 when the plus button is clicked.
  const incrementHandler = () => {
    setCount(count + 1);

    // This log shows the old value immediately after `setCount`.
    // React state updates are asynchronous, so the logged value may look delayed.
    console.log(count);
  };

  // Decrease the count by 1, but only if it is already above 0.
  const decrementHandler = () => {
    // This `if` statement prevents negative values.
    if (count > 0) {
      setCount(count - 1);
    }
    console.log(count);
  };

  // Increase the current count by 50 in one click.
  const increaseHandler = () => {
    setCount(count + 50);
    console.log(count);
  };

  // Return the UI for the counter component.
  return (
    // Bootstrap classes add spacing, colors, and center alignment.
    <div className="container bg-dark text-light p-5 text-center">
      {/* Show the current state value on screen. */}
      <h1>{count}</h1>

      {/* Call `incrementHandler` when this button is clicked. */}
      <button onClick={incrementHandler} className="btn btn-success m-2">
        +
      </button>

      {/* Call `decrementHandler` when this button is clicked. */}
      <button onClick={decrementHandler} className="btn btn-danger m-2">
        -
      </button>

      {/* Call `increaseHandler` to add 50 to the count. */}
      <button onClick={increaseHandler} className="btn btn-warning m-2">
        Increase By 50
      </button>
    </div>
  );
};

// Export the component so it can be imported into App.jsx.
export default Counter;
