import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByText(/Add/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByLabelText("todo-input");
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo item", () => {
    render(<TodoList />);
    const input = screen.getByLabelText("todo-input");
    fireEvent.change(input, { target: { value: "Toggle Todo" } });
    fireEvent.click(screen.getByText("Add"));

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("deletes a todo item", () => {
    render(<TodoList />);
    const input = screen.getByLabelText("todo-input");
    fireEvent.change(input, { target: { value: "Delete Todo" } });
    fireEvent.click(screen.getByText("Add"));

    fireEvent.click(screen.getByText("Remove"));
    expect(screen.queryByText("Delete Todo")).not.toBeInTheDocument();
  });
});
