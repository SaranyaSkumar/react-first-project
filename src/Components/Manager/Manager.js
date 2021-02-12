import React from 'react'
import Tasks from '../Tasks/Tasks';
import './Manager.css'

const Manager = (props) => {
    return (
        <div className='manager'>
            <Tasks tasks={props.tasks} 
            onDelete={props.onDelete}
            onToggle={props.onToggle}/>
        </div>
    )
}

export default Manager
