import React from 'react';
import './Header.css';
import Button from '../Button/Button'

const Header = (props) => {

    return (
        <div className='header'>
            <header className='header-text-area'>
                <h2>{props.title}</h2>
                <Button text='Add Task' onClick={props.onAdd}/>
            </header>
        </div>
    )
}

export default Header
