import React from 'react';
import Header from '../Header/Header'
import Manager from '../Manager/Manager'
import './Main.css'
import AddTask from '../AddTask/AddTask';
import Footer from '../Footer/Footer';
import UpdateTask from '../UpdateTask/UpdateTask';

const Main = (props) => {
    return (
        <div>
            <Header title='React Task Manager' 
            onAdd={() => props.setShowAddTask(!props.showAddTask)} goBackToDasboard={() => props.goBackToDasboard()}/>
            {props.showAddTask && <AddTask onAdd={props.onAdd} showAddTask={props.showAddTask}/>}
            {props.showUpdateTask && <UpdateTask taskToShow={props.onSelect} onUpdate={props.onUpdate}/>}

            {(!props.showAddTask && !props.showUpdateTask) && <div>
                {props.tasks&& props.tasks.length>0 ? (
                <Manager tasks={props.tasks} 
                onDelete={props.onDelete} 
                onUpdate={props.onUpdate}
                showUpdateTask={props.showUpdateTask}
                setShowUpdateTask={props.setShowUpdateTask}
                onToggle={props.onToggle}/>)
                : <p className='no-task'> No tasks :)</p>}
                </div>
            }
            <Footer />
        </div>
    )
}

export default Main
