import React from 'react'

const AboutMe = (props) => {
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

export default AboutMe
