import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Create = (props) => {
  const [taskInput, setTaskInput] = useState("");

  const changeHandler = (event) => {
    setTaskInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const cleanedTask = taskInput.trim();

    if (cleanedTask) {
      props.onAdd({
        name: taskInput,
        id: uuidv4(),
      });
    }

    setTaskInput("");
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="task-form">
        <input
          type="text"
          placeholder="Enter task name..."
          value={taskInput}
          onChange={changeHandler}
          className="task-input"
        />

        <button type="submit" className="add-button">
          <FontAwesomeIcon icon={faPlus} />
          <span>Add Task</span>
        </button>
      </form>
    </div>
  );
};

export default Create;
