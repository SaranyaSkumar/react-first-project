import React from 'react'
import './ImageArea.css'

function ImageArea(props) {
    return (
        <div>
            <img className='login-image' src={props.image} />
        </div>
    )
}

export default ImageArea
