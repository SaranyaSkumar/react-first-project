import React from 'react';
import Task from '../Task/Task'

const Tasks = (props) => {

    return (
        <div>
            {props.tasks.map((task) => ( 
            <Task key={task._id} task={task} onDelete={props.onDelete}
            onUpdatetask={props.onUpdatetask}
            showUpdateTask={props.showUpdateTask}
            setShowUpdateTask={props.setShowUpdateTask}
            onToggle={props.onToggle} onUpdate={props.setShowUpdateTask}/>
            ))}
        </div>
    )
}

export default Tasks
