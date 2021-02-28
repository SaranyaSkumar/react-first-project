import React from 'react'
import GoogleButton from '../GoogleButton/GoogleButton';

function ButtonArea(props) {
    return (
        <div>
            <div>
                <GoogleButton text='SignUp' isLoggedIn={props.isLoggedIn} signUpUser={props.signUpUser}/>
                
  {/* document.getElementById('googleButton') */}
            </div>
        </div>
    )
}

export default ButtonArea
