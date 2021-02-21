import React from 'react'
import Tasks from '../Tasks/Tasks';
import './Manager.css'

const Manager = (props) => {
    return (
        <div className='manager'>
            {/* <div className='welcome-text'>Welcome {JSON.parse(localStorage.getItem('user')).name}</div> */}
            <Tasks tasks={props.tasks} 
            onDelete={props.onDelete}
            onUpdate={props.setShowUpdateTask}
            onUpdatetask={props.onUpdate}
            showUpdateTask={props.showUpdateTask}
            setShowUpdateTask={props.setShowUpdateTask}
            onToggle={props.onToggle}/>
        </div>
    )
}

export default Manager
