import React from 'react'
import './GoogleButton.css'
import { useGoogleLogin } from 'react-google-login';
const clientId="1041274157911-l87iirfdcmi51a8m5rj9m1ia0958qehr.apps.googleusercontent.com"

function GoogleButton(props) {
    const onSuccess =async (res) => {
        res= await res;
        console.log('Login Success: currentUser:', res.profileObj);
        // if(res.profileObj && res.profileObj.hasOwnProperty('name')){
          localStorage.setItem('user',JSON.stringify(res.profileObj));
          props.isLoggedIn();
        // }
      };
    
      const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
          `Failed to login.`
        );
      };
    
      const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        // accessType: 'offline',
        responseType: 'code',
        prompt: 'consent',
      });

    return (
        <div className='long-button'>
            <button onClick={signIn} className='google-auth-button'>
                Sign in with Google
            </button>
        </div>
    )
}

export default GoogleButton

