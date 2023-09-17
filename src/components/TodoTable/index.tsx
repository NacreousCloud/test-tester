import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useState } from "react";
import Button from "../Button";
import TodoInput from "../TodoInput";

const TodoTable = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    setTodoList((c) => [...c, inputText]);
    setInputText("");
  };

  const handleDeleteTodo = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setTodoList((c) =>
      c.filter((_, index) => index !== Number(target.dataset["id"])),
    );
  };

  return (
    <>
      <div>
        <TodoInput {...{ inputText, handleInputText }} />
        <Button onClick={handleAddTodo} disabled={!inputText}>
          추가
        </Button>
      </div>
      <div>
        <ul id="todo-list" data-testid="todo-list">
          {todoList.map((title, index) => (
            <Item>
              <Text>{title}</Text>
              <Button data-id={index} onClick={handleDeleteTodo}>
                삭제
              </Button>
            </Item>
          ))}
        </ul>
      </div>
    </>
  );
};

const Item = styled.li`
  list-style: none;
`;

const Text = styled.span`
  font-size: 1.5rem;
`;

export default TodoTable;
