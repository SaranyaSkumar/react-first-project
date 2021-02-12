import React from 'react'
import './Task.css';
import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    return (
        <div className={`task ${props.task.reminder ? 'reminder': ''}`}>
            <p className='task-list' onDoubleClick={() => props.onToggle(props.task.id)}>
                {props.task.text} 
                <FaTimes className='close-task' 
                onClick={() => props.onDelete(props.task.id)}/>
            </p>
            <p className='timeline'>{props.task.timeline}</p>
        </div>
    )
}

export default Task
