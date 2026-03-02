//App.js
import React, { useState } from "react";
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false }
  ]);

  //Add new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  //Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return(
    <div className="app">
       <h1>Task Manager</h1>
       <AddTask onAdd={addTask} />
       <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
       />
    </div>
  );
}

export default App;