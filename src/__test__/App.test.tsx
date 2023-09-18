import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "../App";

describe("App Rendering Test", () => {
  test("화면에 타이틀이 정상적으로 떠야한다", () => {
    render(<App />);
    const linkElement = screen.getByText(/TODO List/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("화면에 입력을 위한 input이 정상적으로 떠야한다", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/할 일을 입력해주세요/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("화면에 추가 버튼이 정상적으로 떠야한다", () => {
    render(<App />);
    const buttonElement = screen.getByText(/추가/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("화면에 리스트가 정상적으로 떠야한다", () => {
    render(<App />);
    const listElement = screen.getByTestId("todo-list");
    expect(listElement).toBeInTheDocument();
  });
});

describe("TODO Function Test - Add", () => {
  const init = () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/할 일을 입력해주세요/i);
    const buttonElement = screen.getByTestId("add");
    const listElement = screen.getByTestId("todo-list");
    return { inputElement, buttonElement, listElement };
  };

  test("추가 버튼을 누르면 리스트에 추가되어야 한다", () => {
    const { inputElement, buttonElement, listElement } = init();
    const todo = "TODO 1";

    inputElement.focus();
    userEvent.type(inputElement, todo);
    inputElement.blur();

    act(() => {
      buttonElement.click();
    });
    expect(listElement).toHaveTextContent(todo);
  });

  test("아무것도 입력하지않으면 추가되지 않아야 한다", () => {
    const { buttonElement, listElement } = init();

    buttonElement.click();
    expect(listElement).toBeEmptyDOMElement();
  });

  test("빈값을 입력하면 버튼이 disabled 되어야한다.", () => {
    const { buttonElement } = init();
    expect(buttonElement).toBeDisabled();
  });

  test("추가 버튼을 누르면 input이 초기화 되어야 한다", () => {
    const { inputElement, buttonElement } = init();

    const todo = "TODO 1";
    inputElement.focus();
    userEvent.type(inputElement, todo);
    inputElement.blur();

    act(() => {
      buttonElement.click();
    });

    expect(inputElement).toHaveValue("");
  });
});

describe("TODO Function Test - Delete", () => {
  const init = () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/할 일을 입력해주세요/i);
    const buttonElement = screen.getByText(/추가/i);
    const listElement = screen.getByTestId("todo-list");
    return { inputElement, buttonElement, listElement };
  };
  const addTodo = (name: string) => {
    const inputElement = screen.getByPlaceholderText(/할 일을 입력해주세요/i);
    const buttonElement = screen.getByText(/추가/i);

    const todoName1 = name;
    inputElement.focus();
    userEvent.type(inputElement, todoName1);
    inputElement.blur();
    act(() => buttonElement.click());
  };

  test("추가된 TODO 항목에 삭제 버튼이 있어야한다", () => {
    init();

    addTodo("TODO 1");
    const deleteButton = screen.getByText("삭제");
    expect(deleteButton).toBeInTheDocument();
  });

  test("삭제 버튼을 누르면 TODO 항목이 삭제되어야한다.", () => {
    init();

    addTodo("TODO 1");
    const deleteButton = screen.getByText("삭제");

    expect(deleteButton).toBeInTheDocument();

    act(() => deleteButton.click());

    expect(screen.queryByText("TODO 1")).not.toBeInTheDocument();
  });

  test("TODO 항목 개수 만큼 삭제 버튼이 있어야한다", () => {
    init();

    addTodo("TODO 1");
    addTodo("TODO 2");

    expect(screen.getAllByText("삭제")).toHaveLength(2);
  });

  test("삭제 버튼을 누르면 정확한 위치의 TODO 항목이 삭제되어야한다", () => {
    init();

    addTodo("TODO 1");
    addTodo("TODO 2");
    addTodo("TODO 3");

    expect(screen.getAllByText("삭제")).toHaveLength(3);

    const deleteButton = screen.getAllByText("삭제")[1];
    act(() => deleteButton.click());

    expect(screen.queryByText("TODO 2")).not.toBeInTheDocument();
  });
});
