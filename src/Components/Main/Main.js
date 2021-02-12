import React from 'react';
import Header from '../Header/Header'
import Manager from '../Manager/Manager'
import './Main.css'
import AddTask from '../AddTask/AddTask';
import Footer from '../Footer/Footer';

const Main = (props) => {
    return (
        <div>
            <Header title='React Task Manager' 
            onAdd={() => props.setShowAddTask(!props.showAddTask)}/>
            {props.showAddTask && <AddTask onAdd={props.onAdd} showAddTask={props.showAddTask}/>}

            {!props.showAddTask && <div>
                {props.tasks.length>0 ? (
                <Manager tasks={props.tasks} 
                onDelete={props.onDelete} 
                onToggle={props.onToggle}/>)
                : <p className='no-task'> No tasks :)</p>}
                </div>
            }
            <Footer />
        </div>
    )
}

export default Main
