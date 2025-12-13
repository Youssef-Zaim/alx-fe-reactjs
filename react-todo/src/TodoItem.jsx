import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li data-testid="todo-item">
      <span
        onClick={() => onToggle(todo.id)}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}
