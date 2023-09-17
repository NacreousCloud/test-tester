import "./App.css";
import TodoTable from "./components/TodoTable";

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO List</h1>
      </header>
      <TodoTable></TodoTable>
    </div>
  );
}

export default App;
