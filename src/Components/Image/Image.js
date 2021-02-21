import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
