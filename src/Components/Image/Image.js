import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Logout from '../Logout/Logout'

function Image(props) {
    return (
        <div>
            {/* <img className={props.style} src={props.image} /> */}
            <FontAwesomeIcon size='5x' icon={props.icon}/>
            {/* <Logout /> */}
        </div>
    )
}

export default Image
