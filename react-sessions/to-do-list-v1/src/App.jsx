import { useState } from "react";

import "./App.css";
import Create from "./Components/Create";
import Task from "./Components/Task";

function App() {
  // `tasks` is the main source of truth for the whole app.
  // Each task will look like this:
  // { id: "unique-id", title: "Buy milk", description: "From the corner shop" }
  //
  // We keep this state in `App` instead of inside child components because
  // both `Create` and `Task` need to work with the same list.
  const [tasks, setTasks] = useState([]);

  // This function removes one task from the list.
  // React state should be treated as immutable, so we do not change the old
  // array directly with something like `splice()`.
  //
  // Instead, `filter()` creates a brand-new array that contains every task
  // except the one whose id matches `taskIdToDelete`.
  const deleteTaskHandler = (taskIdToDelete) => {
    setTasks((previousTasks) => {
      return previousTasks.filter((task) => task.id !== taskIdToDelete);
    });
  };

  // This function receives a brand-new task object from the `Create` component.
  // We place the new task at the beginning of the array using:
  // [newTask, ...prevTasks]
  //
  // `...prevTasks` is the spread operator. It copies all old tasks into the
  // new array so the UI updates without mutating existing state.
  const addTaskHandler = (newTask) => {
    setTasks((prevTasks) => {
      return [newTask, ...prevTasks];
    });
  };

  return (
    <div className="app-shell">
      {/* Decorative background elements used only for styling. */}
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <div className="todo-panel">
        <h1 className="hero-title">Simple To-Do List</h1>

        <p className="hero-copy">
          Same basic idea as your original app: type a task, add it to the list,
          and remove it when you are done.
        </p>

        {/* We pass a function as a prop so the child can send data back up. */}
        <Create onAdd={addTaskHandler} />

        {/* Conditional rendering:
            If tasks exist, show the list.
            Otherwise, show a friendly empty-state message. */}
        {tasks.length > 0 ? (
          <ul className="task-list">
            {tasks.map((task) => (
              // `key` helps React track each item efficiently when the list changes.
              <Task key={task.id} task={task} onDelete={deleteTaskHandler} />
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
