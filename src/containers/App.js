// import logo from './logo.svg';
import classes from './App.css';
import Person from '../Components/Persons/Person/Person'
import React, { Component, useState, useEffect } from 'react';
import Main from '../Components/Main/Main';
import writeJsonFile from 'write-json-file'
// import task_set from '../../public/taskSet.json'

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const server_tasks = await fetchTasks();
      console.log("server_tasks",server_tasks)
      setTasks(server_tasks.tasks)
    }
    getTasks();
  }, [])

  //fetch tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:3000/taskSet.json');
    const final_data = await response.json();
    return final_data;
  }

  //fetch task
  const fetchTask = async (id) => {
    const server_tasks = await fetchTasks();
    let single_task= server_tasks.tasks.find(item => item.id === id);
    // const response = await fetch(`http://localhost:5000/tasks/${id}`);
    // const final_data = await response.json();
    return single_task;
  }

  const [showAddTask, setShowAddTask] = useState(false);

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //update task
  const updateTaskbyId= async(task) => {
    const server_tasks = await fetchTasks();
    server_tasks.tasks.find((item, index) => {
      if(item.id === task.id){
        server_tasks.tasks.splice(index, 1);
        server_tasks.tasks.push(task);
        return server_tasks;
    }});
  }

  //Reminder
  const reminder = async (id) => {
    const getTask = await fetchTask(id);
    const updatedTask = {
      ...getTask,
      reminder: !getTask.reminder
    };
    console.log("getTask",updatedTask);
    const updadted_taskList= await updateTaskbyId(updatedTask);
    await writeJsonFile('./../public/taskSet.jso', updadted_taskList);
    // const response = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-type': 'application/jso n'
    //   },
    //   body: JSON.stringify(updatedTask)
    // })

    // const data = await response.json();

    // setTasks(tasks.map((task) =>
    //   task.id === id
    //     ? { ...task, reminder: !data.reminder }
    //     : task))
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
