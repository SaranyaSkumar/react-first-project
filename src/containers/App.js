// import logo from './logo.svg';
import classes from './App.css';
import React, { useState, useEffect } from 'react';
import Main from '../Components/Main/Main';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState();

  useEffect(() => {
    const getTasks = async () => {
      const server_tasks = await fetchTasks();
      setTasks(server_tasks)
    }
    getTasks();
  }, [])

  //fetch tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:4000/tasks/get/tasks/all');
    const final_data = await response.json();
    if(final_data && final_data.data){
      return final_data.data;
    }
  }

  //fetch task
  const fetchTask = async (_id) => {
    const response = await fetch(`http://localhost:5000/tasks/${_id}`);
    const final_data = await response.json();
    return final_data;
  }

  const [showAddTask, setShowAddTask] = useState(false);
  const [showUpdateTask, setShowUpdateTask1] = useState(false);

  //delete task
  const deleteTask = async (_id) => {
    await fetch(`http://localhost:4000/tasks/disable/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({_id:_id})
    })
    setTasks(tasks.filter((task) => task._id !== _id))
  }

  //Reminder
  const reminder = async (_id) => {
    const getTask = await fetchTask(_id);
    const updatedTask = {
      ...getTask,
      reminder: !getTask.reminder
    };
    const response = await fetch(`http://localhost:5000/tasks/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await response.json();

    setTasks(tasks.map((task) =>
      task._id === _id
        ? { ...task, reminder: !data.reminder }
        : task))
  }

  //add task
  const addTask = async (task) => {
    const response = await fetch('http://localhost:4000/tasks/create/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await response.json();
    console.log("data",data)
    setTasks([...tasks, data]);
    setShowAddTask(false);
    const server_tasks = await fetchTasks();
    setTasks(server_tasks)
  }

  //update Task
  const updateTask = async (task) => {
    console.log("task",task)
    const response = await fetch('http://localhost:4000/tasks/update/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await response.json();
    console.log("data",data)
    setTasks([...tasks, data]);
    setShowUpdateTask1(false);
    const server_tasks = await fetchTasks();
    setTasks(server_tasks)
  }

  const setShowUpdateTask= (taskToUpdate) =>{
    setTask(taskToUpdate[0]);
    setShowUpdateTask1(true);
  }

  const redirectToMainPage = () => {
    setShowUpdateTask1(false);
    setShowAddTask(false);
  }

  return (
    <div className={classes.App}>
      <Main tasks={tasks}
        onDelete={deleteTask}
        onToggle={reminder}
        onAdd={addTask}
        showUpdateTask={showUpdateTask}
        setShowUpdateTask={setShowUpdateTask}
        onSelect={task}
        onUpdate={updateTask}
        showAddTask={showAddTask}
        goBackToDasboard={redirectToMainPage}
        setShowAddTask={setShowAddTask} />

    </div>
  );
}

export default App;
