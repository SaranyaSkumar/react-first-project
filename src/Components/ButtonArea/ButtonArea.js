import React from 'react'
import GoogleButton from '../GoogleButton/GoogleButton';

function ButtonArea(props) {
    return (
        <div>
            <div>
                <GoogleButton text='SignUp' isLoggedIn={props.isLoggedIn}/>
                
  {/* document.getElementById('googleButton') */}
            </div>
        </div>
    )
}

export default ButtonArea
