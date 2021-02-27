import React from 'react'
import { useGoogleLogout } from 'react-google-login';
import Btn from '../Btn/Btn'
const clientId="1041274157911-l87iirfdcmi51a8m5rj9m1ia0958qehr.apps.googleusercontent.com"

function Logout() {

    const onLogoutSuccess = () => {
        console.log('logout');
        localStorage.removeItem('user');
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
        // history.push('/');
      };
      const onFailure = () => {
        console.log('logout fail');
      };
    
    const { signOut } = useGoogleLogout({
        clientId: clientId,
        onLogoutSuccess: onLogoutSuccess,
        onFailure: onFailure,
      });
    

    return (
        <div className='main-button'>
            <Btn text='Sign Out' logout={signOut}/>
        </div>
    )
}

export default Logout
