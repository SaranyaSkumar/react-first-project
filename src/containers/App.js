// import logo from './logo.svg';
import classes from './App.css';
import React, { useState, useEffect } from 'react';
import Main from '../Components/Main/Main';
import MainLogin from '../Components/MainLogin/MainLogin';
import env from '../Env/environment.json';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState();

  useEffect(() => {
    if(localStorage.getItem('user')){
      showLoginPage(true);
    }else{
      showLoginPage(false);
    }
    const getTasks = async () => {
      const server_tasks = await fetchTasks();
      setTasks(server_tasks)
    }
    getTasks();
  }, [])

  //fetch tasks
  const fetchTasks = async () => {
    const response = await fetch(env.baseUrl+'/tasks/get/tasks/all');
    const final_data = await response.json();
    if(final_data && final_data.data){
      return final_data.data;
    }
  }

  //fetch task
  const fetchTask = async (_id) => {
    const response = await fetch(`${env.baseUrl}/tasks/${_id}`);
    const final_data = await response.json();
    return final_data;
  }

  const [showAddTask, setShowAddTask] = useState(false);
  const [showUpdateTask, setShowUpdateTask1] = useState(false);
  const [userLogin, showLoginPage] = useState(false);

  //delete task
  const deleteTask = async (_id) => {
    await fetch(`${env.baseUrl}/tasks/disable/tasks`, {
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
    const response = await fetch(`${env.baseUrl}/tasks/${_id}`, {
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
    const response = await fetch(env.baseUrl+'/tasks/create/tasks', {
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
    const response = await fetch(env.baseUrl+ '/tasks/update/tasks', {
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

  const isLoggedIn= () => {
    let user= localStorage.getItem('user');
    if(user){
      showLoginPage(true);
    }else{
      showLoginPage(false);
    }
  }

  const getUser = async (data) => {
    const response = await fetch(env.baseUrl+'/users/get/byEmail', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const user_data = await response.json();
    return user_data;
  }

  const signIn= async() => {
    
  }

  const signUp= () => {
    console.log("signup")
  }

  const createUser = async(data) => {
    let user= await getUser(data);
    if(user && user.hasOwnProperty('message') && user.message=='success'){
      if(user.data && user.data.length>0){
        signIn();
      }else{
        signUp();
      }
    }
  }


  return (
    <div className='home'>
      {userLogin? <div className={classes.App}>
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
      </div>: 
      <MainLogin isLoggedIn={isLoggedIn}
      />}
      
    </div>
  );
}

export default App;
