import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getAllByTestId("todo-item").length).toBeGreaterThan(0);
});

test("adds a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getAllByTestId("todo-item").length).toBeGreaterThan(2);
});

test("toggles a todo", () => {
  render(<TodoList />);
  const item = screen.getAllByTestId("todo-item")[0];
  fireEvent.click(item.querySelector("span"));
  expect(item.querySelector("span")).toHaveStyle(
    "text-decoration: line-through"
  );
});
