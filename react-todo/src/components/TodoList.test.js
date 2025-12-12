import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders all todo items", () => {
  const tasks = ["Task 1", "Task 2", "Task 3"];
  render(<TodoList items={tasks} />);

  const listItems = screen.getAllByTestId("todo-item");
  expect(listItems).toHaveLength(3);
});
