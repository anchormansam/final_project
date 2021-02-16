import React, { useState } from "react";
import "../TodoList/Tasks.css";
import Task from "../TodoList/Task";

const handleSubmit = (e, tasks, setTasks, input, setInput) => {
  e.preventDefault()
  const id = (tasks.length) ? tasks[tasks.length - 1].id + 1 : 0
  setTasks([...tasks, {id: id, message: input}])
  setInput('')
};

const deleteTask = (id, tasks, setTask) => {
  setTask(tasks.filter(task => task.id != id))
}
export default () => {
  const [tasks, setTasks] = useState([
    {id: 1, message: 'Sample Task' },
  ])
  
  const [input, setInput] = useState('')

  return (
    <div className="task">
      <form onSubmit={(e) => handleSubmit(e, tasks, setTasks, input, setInput)}>
        <input onChange={(e) => setInput(e.target.value) } value={input}></input>
        <button>Submit</button>
      </form>
      {tasks.map(task => (
        <Task message={task.message} id={task.id} deleteTask={(id) => deleteTask(id, tasks, setTasks)}/>
      ))}
    </div>
  );
};
