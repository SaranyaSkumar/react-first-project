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
    if(localStorage.getItem('user')){
      let userId= JSON.parse(localStorage.getItem('user'))._id;
      const response = await fetch(env.baseUrl+`/tasks/get/tasks/user?userId=${userId}`);
      const final_data = await response.json();
      if(final_data && final_data.data){
        return final_data.data;
      }
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
    task.userId=JSON.parse(localStorage.getItem('user'))._id;
    const response = await fetch(env.baseUrl+'/tasks/create/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await response.json();
    console.log("data",data)
    if(tasks)  setTasks([...tasks, data]);
    else setTasks([ data]);
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

  //GET USER 
  // const getUser = async (data) => {
  //   const response = await fetch(env.baseUrl+`/users/get/byEmail?payload=${data}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json',
  //       'Access-Control-Allow-Origin': '*'
  //     },
  //     // params: JSON.stringify(data)
  //   });
  //   const user_data = await response.json();
  //   return user_data;
  // }


  const signUpUser=async () => {
    console.log("signup")
    let user= localStorage.getItem('user');
    let user_data= await signUp(user);
    console.log("user_data",user_data)
  }

  const signUp = async(data) => {
    try{
      const response = await fetch(env.baseUrl+`/users/create?payload=${data}`, {
        method: 'GET',
      });
      console.log("response",response);
      const user_data = await response.json();
      if(user_data && user_data.hasOwnProperty('message')&& user_data.message==='success'){
        localStorage.setItem('user', JSON.stringify(user_data.data))
      }
    }catch(e){
      console.log("error occured",e)
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
      signUpUser={signUpUser}
      />}
      
    </div>
  );
}

export default App;
