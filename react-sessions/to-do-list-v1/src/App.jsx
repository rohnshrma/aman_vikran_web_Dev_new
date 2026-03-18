import { useState } from "react";

import "./App.css";
import Create from "./Components/Create";
import Task from "./Components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTaskHandler = (taskIdToDelete) => {
    setTasks((previousTasks) => {
      return previousTasks.filter((task) => task.id !== taskIdToDelete);
    });
  };

  const addTaskHandler = (newTask) => {
    console.log("Adding task");
    setTasks((prevTasks) => {
      return [newTask, ...prevTasks];
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

        <Create onAdd={addTaskHandler} />

        {tasks.length > 0 ? (
          <ul className="task-list">
            {tasks.map((task) => (
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
