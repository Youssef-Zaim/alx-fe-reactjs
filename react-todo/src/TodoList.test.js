import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders initial todo", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);

  const input = screen.getByLabelText("todo-input");
  fireEvent.change(input, { target: { value: "New Task" } });

  fireEvent.click(screen.getByText("Add"));

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);

  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);

  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);

  fireEvent.click(screen.getByText("Delete"));

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
