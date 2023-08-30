import "./App.css";

function App() {
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
        />
        <button>추가</button>
      </div>
      <div>
        <ul id="todo-list" data-testid="todo-list"></ul>
      </div>
    </div>
  );
}

export default App;
