import React from 'react'
import './DashboardButton'

const DashboardButton = (props) => {
    return (
        <div>
             <div className='main-button'>
            <button className='button' onClick={props.onClick}>
                {props.text}
            </button>
        </div>
        </div>
    )
}

export default DashboardButton
