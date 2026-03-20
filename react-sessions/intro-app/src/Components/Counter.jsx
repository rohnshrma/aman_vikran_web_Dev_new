import React, { useReducer } from "react";

// This object is the starting state for the reducer.
// In React, "state" means data that belongs to a component and can change over time.
// We store the counter inside an object instead of a plain number so this example scales
// well if we later want to add more related values such as step size, history, or limits.
const initialState = {
  count: 0,
};

// A reducer is a pure function:
// 1. It receives the current state.
// 2. It receives an action object that describes "what happened".
// 3. It returns the next state.
//
// Important reducer rule:
// Never mutate the existing state directly.
// Instead, return a brand new state object.
//
// Why this pattern is useful:
// `useState` is perfect for simple state updates.
// `useReducer` becomes helpful when:
// - state logic has multiple possible updates
// - many buttons/events change the same state
// - you want one central place that explains all allowed state transitions
const counterReducer = (state, action) => {
  console.log(state, action);

  // `action.type` is like a label for the event we want to handle.
  // Here, "INCREMENT" means "increase the count by 1".
  if (action.type === "INCREMENT") {
    return {
      // We create and return a new object.
      // React compares the old and new state references, then re-renders if needed.
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      // This reduces the count by 1.
      count: state.count - 1,
    };
  } else if (action.type === "INCREASE_BY_50") {
    return {
      // `payload` is extra data attached to the action.
      // Instead of hardcoding the number here, we read it from the action object.
      // This makes the reducer more reusable because the same action shape could
      // increase by 10, 50, 100, or any other value.
      count: state.count + action.payload,
    };
  }

  // If the reducer gets an unknown action, we return the current state unchanged.
  // This is a safe default and prevents the app from crashing on unsupported actions.
  return state;
};

// `Counter` is a React functional component.
// A component is simply a JavaScript function that returns JSX.
// JSX looks like HTML, but it is actually JavaScript syntax that React converts
// into real UI elements.
const Counter = () => {
  console.log("counter re-rendered");

  // `useReducer(reducer, initialState)` gives us:
  // - `state`: the current state value
  // - `dispatch`: a function used to send actions to the reducer
  //
  // Flow:
  // button click -> dispatch(action) -> reducer runs -> new state returned -> UI updates
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // Event handler for the "+" button.
  // We are not changing state directly here.
  // Instead, we dispatch an action describing the user's intent.
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  // Event handler for the "-" button.
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  // Event handler for the "Increase By 50" button.
  // `payload: 50` carries extra information to the reducer.
  const increaseHandler = () => {
    dispatch({ type: "INCREASE_BY_50", payload: 50 });
  };

  // The returned JSX describes what should appear on the screen.
  // React reads the current state and keeps the UI in sync with it.
  return (
    <div className="container bg-dark text-light p-5 text-center">
      {/* `state.count` is the current counter value from reducer state. */}
      <h1>{state.count}</h1>

      {/* When clicked, this dispatches the INCREMENT action. */}
      <button onClick={incrementHandler} className="btn btn-success m-2">
        +
      </button>

      {/* When clicked, this dispatches the DECREMENT action. */}
      <button onClick={decrementHandler} className="btn btn-danger m-2">
        -
      </button>

      {/* When clicked, this dispatches an action with extra data in `payload`. */}
      <button onClick={increaseHandler} className="btn btn-warning m-2">
        Increase By 50
      </button>
    </div>
  );
};

// Exporting the component allows other files, such as App.jsx, to import and render it.
export default Counter;
