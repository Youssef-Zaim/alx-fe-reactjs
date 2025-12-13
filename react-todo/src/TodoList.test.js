import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders todo items", () => {
  render(<TodoList />);
  const items = screen.getAllByTestId("todo-item");
  expect(items.length).toBeGreaterThan(0);
});
