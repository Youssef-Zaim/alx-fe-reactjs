// src/components/TodoItem.jsx
import React from "react";

function TodoItem({ item }) {
  return (
    <li data-testid="todo-item">
      {item}
    </li>
  );
}

export default TodoItem;
