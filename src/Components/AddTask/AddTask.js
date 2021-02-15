import React,{useState} from 'react'
import './AddTask.css'

const AddTask = (props) => {
    const [task, setText] = useState('')
    const [description, setSummary] = useState('')
    const [timeline, setTimeline] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault();

        if(!task){
            alert('Please add a task');
            return;
        }
        
        props.onAdd({task,description, timeline, reminder});
        setText('');
        setSummary('');
        setTimeline('');
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

export default AddTask
