import { MouseEventHandler } from "react";
import Button from "../Button";

export interface TodoItemProps {
  title: string;
  index: number;
  handleDeleteTodo: MouseEventHandler;
}

export const TodoItem = ({ title, index, handleDeleteTodo }: TodoItemProps) => {
  return (
    <li>
      {title}
      <Button data-id={index} onClick={handleDeleteTodo}>
        삭제
      </Button>
    </li>
  );
};
