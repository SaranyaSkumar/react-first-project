import React from 'react'
import './ImageArea.css'

function ImageArea(props) {
    return (
        <div>
            <img className='login-image' src={props.image} alt='login' />
        </div>
    )
}

export default ImageArea
