import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// This object describes the starting state of our form.
// Both input boxes begin as empty strings.
const initialState = {
  title: "",
  description: "",
};

// A reducer is a function that decides how state should change.
// It always receives:
// 1. the current state
// 2. an action object that describes "what happened"
//
// This pattern is helpful when one piece of UI has multiple related updates,
// like a form with more than one field.
const formReducer = (state, action) => {
  switch (action.type) {
    case "TITLE_CHANGE":
      return {
        // We update only the title.
        // The description is preserved from the old state.
        title: action.payload,
        description: state.description,
      };

    case "DESCRIPTION_CHANGE":
      return {
        // Here we do the opposite: keep the title, update the description.
        title: state.title,
        description: action.payload,
      };

    case "RESET":
      // After a successful submit, clear both input fields.
      return initialState;

    default:
      return state;
  }
};

const Create = (props) => {
  // `useReducer` is similar to `useState`, but gives us a more organized way
  // to manage complex or related state updates.
  //
  // `state` = the current form data
  // `dispatch` = a function used to send actions to the reducer
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Controlled input:
  // The input value comes from React state, not directly from the DOM.
  // Every time the user types, we dispatch an action to update the state.
  const titleChangeHandler = (event) => {
    dispatch({ type: "TITLE_CHANGE", payload: event.target.value });
  };

  const descriptionChangeHandler = (event) => {
    dispatch({ type: "DESCRIPTION_CHANGE", payload: event.target.value });
  };

  // This runs when the form is submitted.
  const submitHandler = (event) => {
    // Prevent the browser from reloading the page.
    event.preventDefault();

    // `trim()` removes extra spaces from the beginning and end.
    // This prevents users from adding blank-looking tasks like "   ".
    if (state.title.trim().length > 0 && state.description.trim().length > 0) {
      // We do not save the task here inside this component.
      // Instead, we pass the new task object up to the parent using `props.onAdd`.
      // This is a common React pattern called "lifting state up".
      props.onAdd({
        ...state,
        // A unique id lets React render lists correctly and helps us delete
        // the exact task the user clicks on later.
        id: uuidv4(),
      });

      // Clear the form only after a valid task is added.
      dispatch({ type: "RESET" });
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="task-form">
        {/* `label` elements improve accessibility and help beginners understand
            which input belongs to which piece of data. */}
        <label htmlFor="task-title" className="sr-only">
          Task title
        </label>
        <input
          id="task-title"
          type="text"
          placeholder="Enter task name..."
          value={state.title}
          onChange={titleChangeHandler}
          className="task-input"
        />
        <label htmlFor="task-description" className="sr-only">
          Task description
        </label>
        <input
          id="task-description"
          type="text"
          placeholder="Task Description"
          value={state.description}
          onChange={descriptionChangeHandler}
          className="task-input"
        />

        <button type="submit" className="add-button">
          {/* Font Awesome renders the plus icon as a React component. */}
          <FontAwesomeIcon icon={faPlus} />
          <span>Add Task</span>
        </button>
      </form>
    </div>
  );
};

export default Create;
