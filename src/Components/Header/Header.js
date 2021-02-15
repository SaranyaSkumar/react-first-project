import React from 'react';
import './Header.css';
import Button from '../Button/Button'
import DashboardButton from '../DashboardButton/DashboardButton'
import AboutMe from '../AboutMe/AboutMe'

const Header = (props) => {

    return (
        <div className='header'>
            <header className='header-text-area'>
                <h2>{props.title}</h2>
                <div className='nav-list'>
                    <Button text='Add Task' onClick={props.onAdd}/>
                    <DashboardButton text='Dashboard' onClick={props.goBackToDasboard}/>
                    <AboutMe text='About Me' />
                </div>
            </header>
        </div>
    )
}

export default Header
