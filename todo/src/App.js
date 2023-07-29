
import './App.css';
import { useState } from 'react';
import {Task  } from './Task';

function App() {
  const [todolist, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const addTask = ()=>{
    // const arr = [...todolist, newTask ]
    const task = {
      id: todolist.length===0 ? 1: todolist[todolist.length-1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todolist, task])
  }

  const handleInputChange = (event)=>{
    setNewTask(event.target.value)
  }

  const completeTask=(id)=>{
    setTodoList(todolist.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task; // Return the original task if the id doesn't match
      }
    }));
  }

  const deletetask = (id) =>{
    // const new_todo_list = todolist.filter((task) =>{
    //   return task!==taskname
    // })

    // const new_todo_list = todolist.filter((task) => task!==taskname )
    setTodoList(todolist.filter((task) => task.id!==id ))
  }
  return (
    <div className="App">
     <div className='addTask'>
      <input onChange={handleInputChange}/>
      <button onClick={addTask}> Add Task</button>
     </div>
     <div className="list">

      {todolist.map((task) => {
        return < Task 
            taskName={task.taskName} 
            id={task.id}
            completed= {task.completed}
            deletetask = {deletetask}
            completeTask = {completeTask} />
      })}
      </div>
    </div>
  );
}

export default App;
