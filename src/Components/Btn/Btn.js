import React from 'react'
import './Btn.css'

function Btn(props) {
    return (
        <div>
            <button className='button' onClick={props.logout}>{props.text}</button>
        </div>
    )
}

export default Btn
