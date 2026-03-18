import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, onDelete }) => {
  return (
    <li key={task.id} className="task-item">
      {/* We show the task text inside a simple span element. */}
      <span className="task-name">{task.name}</span>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(task.id)}
      >
        {/* This button removes only the clicked task by sending its id. */}
        <FontAwesomeIcon icon={faTrashCan} />
        <span>Delete</span>
      </button>
    </li>
  );
};

export default Task;
