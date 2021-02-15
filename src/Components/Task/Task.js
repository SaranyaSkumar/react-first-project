import React from 'react'
import './Task.css';
import { FaTimes } from 'react-icons/fa';
import 'react-dropdown/style.css';
import constants from '../../constants';


const Task = (props) => {
    //   const defaultOption = 'Priority';
    const handleChange=(event)=>{
        console.log('.task.',event.target.value)
        props.task.priority=event.target.value;
        props.onUpdatetask(props.task)
        // onUpdatetask
        // () => props.onUpdatetask(props.task)
    }
    return (
        <div>
            {/* {props.showUpdateTask && <UpdateTask />} */}
            <div className={`task ${props.task.reminder ? 'reminder' : ''}`}>
                <p className='task-list' onDoubleClick={() => props.setShowUpdateTask([props.task])}>
                    {props.task.task}
                    <span className='task-right'>
                        <select value={props.task.priority}
                            className={`dropdown ${props.task.priority}`}
                            onChange={handleChange}>
                            <option className='option' value="" disabled selected>Set Priority</option>
                            {constants.priority_list.map((list, index) =>
                                <option className='option' value={list}>{list}</option>
                            )}
                        </select>
                        <FaTimes className='close-task'
                            onClick={() => props.onDelete(props.task._id)} />
                    </span>
                </p>
                <p className='description'>{props.task.description}</p>
                <p>
                    <span className='timeline'>{props.task.timeline}</span>
                    <a className='add-to-calender' href='/'>Add to Calender</a>
                </p>      
            </div>
        </div>
    )
}

export default Task
