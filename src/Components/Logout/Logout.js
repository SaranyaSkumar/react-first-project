import React from 'react'
import Btn from '../Btn/Btn'

const logout= () => {
    localStorage.removeItem('user');
    localStorage.clear();
    sessionStorage.clear()
    // window.localStorage.clear();
    window.location.reload();
    caches.keys().then((names) => {
        for (const name of names) {
          caches.delete(name);
        }
    });
}

function Logout() {
    return (
        <div className='main-button'>
            <Btn text='Sign Out' style='logout' logout={logout}/>
        </div>
    )
}

export default Logout
