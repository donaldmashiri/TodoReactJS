import React, { useEffect, useState} from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "todolist";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);


  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
       <p>React Todo</p>
       <TodoForm addTodo={addTodo} />
       <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
