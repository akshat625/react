import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    { name: "Go to college", date: "23/05/24" },
    { name: "Buy Milk", date: "23/05/24" },
    { name: "Watch movie", date: "23/05/24" },
    { name: "Learn DevOps", date: "01/05/24" }
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
