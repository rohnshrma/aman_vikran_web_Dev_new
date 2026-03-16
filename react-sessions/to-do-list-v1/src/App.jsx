import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  // `tasks` stores every to-do item as an object.
  // Each object has:
  // 1. `name` -> the text typed by the user
  // 2. `id` -> a unique value so React can track each item safely
  const [tasks, setTasks] = useState([]);

  // `taskInput` stores what the user is currently typing in the input field.
  // This is called a "controlled input" because React controls its value.
  const [taskInput, setTaskInput] = useState("");

  const changeHandler = (event) => {
    // `event.target.value` is the current text inside the input box.
    // We save it into state so React can re-render the screen with the new value.
    setTaskInput(event.target.value);
  };

  const submitHandler = (event) => {
    // Prevent the browser from refreshing the page when the form submits.
    event.preventDefault();

    // `trim()` removes accidental spaces from the beginning and end.
    // Example: "   buy milk   " becomes "buy milk"
    const cleanedTask = taskInput.trim();

    // Guard clause:
    // if the user did not type anything meaningful, stop here.
    if (!cleanedTask) {
      return;
    }

    // Functional state update:
    // React gives us the previous array so we can build the next array from it.
    setTasks((previousTasks) => {
      const newTask = {
        name: cleanedTask,
        id: uuidv4(),
      };

      // We place the newest task at the top by putting `newTask` first.
      return [newTask, ...previousTasks];
    });

    // Clear the input after adding the task so the user can type the next one.
    setTaskInput("");
  };

  const deleteTaskHandler = (taskIdToDelete) => {
    // `filter()` creates a brand-new array that keeps every task
    // except the one whose id matches `taskIdToDelete`.
    setTasks((previousTasks) => {
      return previousTasks.filter((task) => task.id !== taskIdToDelete);
    });
  };

  return (
    <div className="app-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <div className="todo-panel">
        <h1 className="hero-title">Simple To-Do List</h1>

        <p className="hero-copy">
          Same basic idea as your original app: type a task, add it to the list,
          and remove it when you are done.
        </p>

        <form onSubmit={submitHandler} className="task-form">
          {/* This input is connected to `taskInput` state.
              Whatever the user types is stored in React state. */}
          <input
            type="text"
            placeholder="Enter task name..."
            value={taskInput}
            onChange={changeHandler}
            className="task-input"
          />

          {/* This button submits the form.
              Because it is inside the form and has `type="submit"`,
              clicking it runs `submitHandler`. */}
          <button type="submit" className="add-button">
            <FontAwesomeIcon icon={faPlus} />
            <span>Add Task</span>
          </button>
        </form>

        {tasks.length > 0 ? (
          // `.map()` loops through the array and returns one `<li>` for each task.
          // So if there are 3 task objects in the array, React shows 3 list items.
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                {/* We show the task text inside a simple span element. */}
                <span className="task-name">{task.name}</span>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => deleteTaskHandler(task.id)}
                >
                  {/* This button removes only the clicked task by sending its id. */}
                  <FontAwesomeIcon icon={faTrashCan} />
                  <span>Delete</span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-state">
            No tasks yet. Add one above and it will appear here.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
