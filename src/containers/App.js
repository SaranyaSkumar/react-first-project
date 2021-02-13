// import logo from './logo.svg';
import classes from './App.css';
import React, { useState, useEffect } from 'react';
import Main from '../Components/Main/Main';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const server_tasks = await fetchTasks();
      setTasks(server_tasks)
    }
    getTasks();
  }, [])

  //fetch tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const final_data = await response.json();
    return final_data;
  }

  //fetch task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const final_data = await response.json();
    return final_data;
  }

  const [showAddTask, setShowAddTask] = useState(false);

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Reminder
  const reminder = async (id) => {
    const getTask = await fetchTask(id);
    const updatedTask = {
      ...getTask,
      reminder: !getTask.reminder
    };
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await response.json();

    setTasks(tasks.map((task) =>
      task.id === id
        ? { ...task, reminder: !data.reminder }
        : task))
  }

  //add task
  const addTask = async (task) => {
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await response.json();
    setTasks([...tasks, data]);
    setShowAddTask(false);
    // const id = tasks.length + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
    // setShowAddTask(false);
  }

  return (
    <div className={classes.App}>
      <Main tasks={tasks}
        onDelete={deleteTask}
        onToggle={reminder}
        onAdd={addTask}
        showAddTask={showAddTask}
        setShowAddTask={setShowAddTask} />

    </div>
  );
}

export default App;
