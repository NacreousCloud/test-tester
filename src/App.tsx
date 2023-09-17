import { ChangeEvent, MouseEvent, useState } from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import Button from "./components/Button";

function App() {
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
    <div className="App">
      <header>
        <h1>TODO List</h1>
      </header>
      <div>
        <TodoInput {...{ inputText, handleInputText }} />
        <Button onClick={handleAddTodo} disabled={!inputText}>
          추가
        </Button>
      </div>
      <div>
        <ul id="todo-list" data-testid="todo-list">
          {todoList.map((title, index) => (
            <TodoItem key={index} {...{ title, index, handleDeleteTodo }} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
