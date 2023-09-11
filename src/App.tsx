import { ChangeEvent, MouseEvent, useState } from "react";
import "./App.css";

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
      <header className="App-header">
        <h1>TODO List</h1>
      </header>
      <div>
        <input
          type="text"
          placeholder="할 일을 입력해주세요"
          id="todo-input"
          name="todo-input"
          value={inputText}
          onChange={handleInputText}
        />
        <button onClick={handleAddTodo} disabled={!inputText}>
          추가
        </button>
      </div>
      <div>
        <ul id="todo-list" data-testid="todo-list">
          {todoList.map((todo, index) => (
            <li>
              {todo}
              <button data-id={index} onClick={handleDeleteTodo}>
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
