import styled from "@emotion/styled";
import { ChangeEventHandler } from "react";
import { ReactComponent as PlusIcon } from "../../plusIcon.svg";
import Button from "../Button";

export interface TodoInputProps {
  inputText: string;
  handleInputText: ChangeEventHandler;
  handleAddTodo: VoidFunction;
}

const TodoInput = ({
  inputText,
  handleInputText,
  handleAddTodo,
}: TodoInputProps) => {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="할 일을 입력해주세요"
        id="todo-input"
        name="todo-input"
        value={inputText}
        onChange={handleInputText}
      />
      <TodoButton
        onClick={handleAddTodo}
        disabled={!inputText}
        data-testid="add"
        variant="transparent"
      >
        <PlusIcon width={"20px"} height={"20px"} />
      </TodoButton>
    </InputWrapper>
  );
};
const InputWrapper = styled.span`
  padding: 0.5rem;
`;
const Input = styled.input`
  padding: 0.5rem;
  border-radius: 15px;
  padding-right: 30px;
`;

const TodoButton = styled(Button)`
  position: relative;
  left: -38px;
  top: 4px;
  opacity: 1;
  transition: opacity 300ms ease;

  &:disabled {
    opacity: 0;
    transition: opacity 300ms ease;
  }
`;

export default TodoInput;
