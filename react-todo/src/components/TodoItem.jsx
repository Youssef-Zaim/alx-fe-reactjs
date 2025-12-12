import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      data-testid="todo-item"
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
      <button
        data-testid={`delete-${todo.id}`}
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
