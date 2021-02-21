import React from 'react';
import './Header.css';
import Button from '../Button/Button'
import DashboardButton from '../DashboardButton/DashboardButton'
import AboutMe from '../AboutMe/AboutMe'
import { Container, Row, Col } from 'react-grid-system';
import Image from '../Image/Image';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Logout from '../Logout/Logout'

const Header = (props) => {

    return (
        <div className='header'>
            <Container>
            <Row>
                <Col>
                <header className='header-text-area'>
                <h2 className='title'>{props.title}</h2>
                <div className='nav-list'>
                    <Button text='Add Task' onClick={props.onAdd}/>
                    <DashboardButton text='Dashboard' onClick={props.goBackToDasboard}/>
                    <AboutMe text='About Me' />
                    <Logout />
                </div>
               
            </header>
                </Col>
                <Col>
                <div className='logout-section'>
                    <Image icon={faUser}/>
                    <div className='name'>{JSON.parse(localStorage.getItem('user')).name}</div>
                </div>
                </Col>
            </Row>
            </Container>
            {/* <hr/> */}
        </div>
    )
}

export default Header
