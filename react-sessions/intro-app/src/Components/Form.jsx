import React, { useState } from "react";

const Form = () => {
  /*
    `text` stores whatever the user is typing right now.
    `setText` is the function React gives us to update `text`.

    This is called component state.
    State is data that belongs to this component and can change over time.
  */
  const [text, setText] = useState("");

  /*
    `submittedName` stores the value only after the form is submitted.
    This helps beginners see that "current input value" and "submitted value"
    can be two different pieces of state.
  */
  const [submittedName, setSubmittedName] = useState("No name submitted yet");

  /*
    This function runs every time the user types inside the input.

    `event` is the object React gives us when something happens.
    `event.target` means "the HTML element that triggered the event".
    `event.target.value` is the current text inside the input box.
  */
  const changeHandler = (event) => {
    setText(event.target.value);
  };

  /*
    This function runs when the form is submitted.
    A form submit normally refreshes the page.
    `preventDefault()` stops that default browser behavior so React can
    handle the form without losing the current app state.
  */
  const submitHandler = (event) => {
    event.preventDefault();

    /*
      `trim()` removes empty spaces from the beginning and end.
      This keeps users from submitting only blank spaces.
    */
    const cleanedText = text.trim();

    // Guard clause: if the input is empty, do nothing.
    if (!cleanedText) {
      setSubmittedName("Please type something before submitting");
      return;
    }

    // Save the submitted value into its own state variable.
    setSubmittedName(cleanedText);

    // Clear the input after submit so the user can type again.
    setText("");
  };

  return (
    <div className="mt-4">
      {/*
        This heading shows the final submitted result.
        It updates only when the user presses the submit button.
      */}
      <h2 className="mb-3">Submitted Name: {submittedName}</h2>

      <form onSubmit={submitHandler}>
        <div className="form-group">
          {/*
            `htmlFor="name"` connects the label to the input with `id="name"`.
            Clicking the label will focus the input, which is better for usability.
          */}
          <label htmlFor="name" className="form-label">
            Enter your name
          </label>

          <input
            /*
              `value={text}` makes this a controlled input.
              That means React state is the single source of truth.
              The displayed input value always comes from `text`.
            */
            value={text}
            onChange={changeHandler}
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Type your name here"
          />
        </div>

        {/*
          This paragraph gives live feedback while the user types.
          It updates on every keystroke because it uses `text` state.
        */}
        <p className="mt-3">
          <strong>Live Input Value:</strong> {text || "Nothing typed yet"}
        </p>

        <button className="btn btn-dark mt-2">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
