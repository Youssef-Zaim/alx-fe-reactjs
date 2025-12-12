// src/App.jsx
import React from "react";
import TodoList from "./components/TodoList";

function App() {
  const tasks = ["Task 1", "Task 2", "Task 3"];
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList items={tasks} />
    </div>
  );
}

export default App;
