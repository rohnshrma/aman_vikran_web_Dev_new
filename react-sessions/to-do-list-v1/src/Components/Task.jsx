import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, onDelete }) => {
  return (
    <li className="task-item">
      {/* This component receives one full task object as a prop from `App`.
          We then display the title and description on the screen. */}
      <span className="task-name">{task.title}</span>
      <span className="task-name">{task.description}</span>

      <button
        type="button"
        className="delete-button"
        // We pass the task id back to the parent when the delete button is clicked.
        // The parent (`App`) owns the list, so the parent is responsible for removing it.
        onClick={() => onDelete(task.id)}
      >
        {/* The trash icon is only visual. The actual delete behavior comes from
            the `onClick` function above. */}
        <FontAwesomeIcon icon={faTrashCan} />
        <span>Delete</span>
      </button>
    </li>
  );
};

export default Task;
