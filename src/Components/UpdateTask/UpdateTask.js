import React,{useState} from 'react'
import './UpdateTask.css'

const UpdateTask = (props) => {
    console.log("props", props)
    const [task, setText] = useState(props.taskToShow.task)
    const [description, setSummary] = useState(props.taskToShow.description)
    const [timeline, setTimeline] = useState(props.taskToShow.timeline)
    const [id, setId] = useState(props.taskToShow.id)
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault();

        if(!task){
            alert('Please add a task');
            return;
        }
        
        props.onUpdate({task,description, timeline, reminder,id});
        setText('');
        setSummary('');
        setTimeline('');
        setId('')
        setReminder(false);
    }

    return (
        <div className='add-form'>
            <form className='task-form' onSubmit={onSubmit}>
                <div className='element'>
                    <label className='form-label'>Task</label><br/>
                    <input className='input-area' type='task' placeholder='Add Text'
                    value={task} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className='element'>
                    <label className='form-label'>Summary</label><br/>
                    <textarea className='text-area' type='text' placeholder='Add task summary'
                    value={description} onChange={(e) => setSummary(e.target.value)}/>
                </div>
                <div className='element'>
                    <label className='form-label'>Timeline</label><br/>
                    <input className='input-area' type='date' placeholder='Add Timeline'
                    value={timeline} onChange={(e) => setTimeline(e.target.value)}/>
                </div>
                <div className='element'>
                    <label className='form-label'>Reminder</label>
                    <input type='checkbox'
                    value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
                </div>

                <input className='save-btn' type='submit' value='Save' />
            </form>
        </div>
    )
}

export default UpdateTask
