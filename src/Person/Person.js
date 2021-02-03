import React from 'react';
// import './Person.css';
import styled from 'styled-components'

const person= (props) =>{
    // const style ={
    //     '@media (min-width:500px)':{
    //         width: '450px'
    //     }
    // }
    const StyledDiv = styled.div`
        width: 50%;
        margin: auto;
        border: 1px solid #eee;
        box-shadow: 0 1px 2px black;
        padding: 10px;
        text-align: center;

        '@media (min-width:500px)':{
               width: '450px'
           }
    `
    return (
        // <div className='Person' style={style}>
        <StyledDiv>
            <h4 onClick={props.click}>{props.name} is from {props.from}</h4>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </StyledDiv>
    );
};

export default person;