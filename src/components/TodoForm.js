import React, {useState} from "react";
// import  {v4 as uuid} from "uuid"; uuid.v4()
// import uuid from "uuid";

function TodoForm({ addTodo }){
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault(); // prevents browser refresh
        // trim() gets rid of string whitespace
        if (todo.task.trim()) {
            addTodo({ ...todo, id: '' });
            setTodo({ ...todo, task: "" });
          }
      }


    return (
        <form onSubmit={handleSubmit}>
            <input
             label="Task"
             type="text"
             name="task"
             value={todo.task}
             onChange={handleTaskInputChange}
            />
            <button type="submit">submit</button>
        </form>
    );
}

export default TodoForm;