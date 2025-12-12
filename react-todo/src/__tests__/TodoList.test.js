import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  const items = screen.getAllByTestId("todo-item");
  expect(items.length).toBe(2);
});

test("adds a new todo", () => {
  render(<TodoList />);

  fireEvent.change(screen.getByTestId("todo-input"), {
    target: { value: "New task" }
  });

  fireEvent.click(screen.getByTestId("add-button"));

  expect(screen.getByText("New task")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);

  const firstItem = screen.getAllByTestId("todo-item")[0];
  fireEvent.click(firstItem);

  expect(firstItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);

  const deleteBtn = screen.getByTestId("delete-1");
  fireEvent.click(deleteBtn);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
