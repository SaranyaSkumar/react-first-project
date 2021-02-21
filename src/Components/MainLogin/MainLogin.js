import React from 'react'
import './MainLogin.css'
import { Container, Row, Col } from 'react-grid-system';
import ButtonArea from '../ButtonArea/ButtonArea';
import ImageArea from '../ImageArea/ImageArea';
import todoimg from '../../assets/todo.png'
const signUp = (e) => {
    console.log("MainLogin")
  }

function MainLogin(props) {
    return (
        <div>
            <div className='main-login-section'>
            <Container>
            <Row>
               <span className='to-continue'> To Continue..</span>
                <Col>
                <ButtonArea isLoggedIn={props.isLoggedIn}/>
                </Col>
                {/* <Col>
                <ImageArea image={todoimg}/>
                </Col> */}
            </Row>
            </Container>
            </div>
        </div>
    )
}

export default MainLogin
