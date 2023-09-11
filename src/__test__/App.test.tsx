import { render, screen } from "@testing-library/react";

import App from "../App";
import userEvent from "@testing-library/user-event";

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
    const buttonElement = screen.getByText(/추가/i);
    const listElement = screen.getByTestId("todo-list");
    return { inputElement, buttonElement, listElement };
  };

  test("추가 버튼을 누르면 리스트에 추가되어야 한다", () => {
    const { inputElement, buttonElement, listElement } = init();
    const todo = "TODO 1";

    inputElement.focus();
    userEvent.type(inputElement, todo);
    inputElement.blur();

    buttonElement.click();

    expect(listElement).toHaveTextContent(todo);
  });

  test("빈값을 입력하면 추가되지 않아야 한다", () => {
    const { inputElement, buttonElement, listElement } = init();

    const todo = "";

    inputElement.focus();
    userEvent.type(inputElement, todo);
    inputElement.blur();

    buttonElement.click();

    expect(listElement).not.toHaveTextContent(todo);
  });

  test("추가 버튼을 누른뒤 추가된 TODO는 input에 입력한 값과 동일해야 한다", () => {});

  test("추가 버튼을 누르면 input이 초기화 되어야 한다", () => {
    const { inputElement, buttonElement } = init();

    const todo = "TODO 1";

    inputElement.focus();
    userEvent.type(inputElement, todo);
    inputElement.blur();

    buttonElement.click();

    expect(inputElement).toHaveValue("");
  });
});
