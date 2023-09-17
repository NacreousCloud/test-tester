import { ChangeEventHandler } from "react";

export interface TodoInputProps {
  inputText: string;
  handleInputText: ChangeEventHandler;
}

const TodoInput = ({ inputText, handleInputText }: TodoInputProps) => {
  return (
    <input
      type="text"
      placeholder="할 일을 입력해주세요"
      id="todo-input"
      name="todo-input"
      value={inputText}
      onChange={handleInputText}
    />
  );
};

export default TodoInput;
