import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const [submittedName, setSubmittedName] = useState("No name submitted yet");

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const cleanedText = text.trim();
    if (!cleanedText) {
      setSubmittedName("Please type something before submitting");
      return;
    }
    setSubmittedName(cleanedText);
    setText("");
  };

  return (
    <div className="mt-4">
      <h2 className="mb-3">Submitted Name: {submittedName}</h2>

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Enter your name
          </label>

          <input
            value={text}
            onChange={changeHandler}
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Type your name here"
          />
        </div>
        <p className="mt-3">
          <strong>Live Input Value:</strong> {text || "Nothing typed yet"}
        </p>

        <button className="btn btn-dark mt-2">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
