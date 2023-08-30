import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App Rendering", () => {
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
