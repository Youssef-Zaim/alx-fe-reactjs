// src/components/TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items = [] }) {
  return (
    <ul data-testid="todo-list">
      {items.map((task, index) => (
        <TodoItem key={index} item={task} />
      ))}
    </ul>
  );
}

export default TodoList;
