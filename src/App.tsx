import "./App.css";
import TodoCalendar from "./components/Calendar";
import TodoTable from "./components/TodoTable";

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO List</h1>
      </header>
      <TodoCalendar></TodoCalendar>
      <TodoTable></TodoTable>
    </div>
  );
}

export default App;
