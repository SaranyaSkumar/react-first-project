import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    render() {
        const style ={
            // '@media (min-width:500px)':{
            //     width: '450px'
            // }
        }
        console.log("Persons.js render");
        return (
            <div className='Person' style={style}>
                <h4 onClick={this.props.click}>{this.props.name} is from {this.props.from}</h4>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}/>
           </div>
        );
    }
};

export default Person;

// const StyledDiv = styled.div`
// width: 50%;
// margin: auto;
// border: 1px solid #eee;
// box-shadow: 0 1px 2px black;
// padding: 10px;
// text-align: center;

// '@media (min-width:500px)':{
//        width: '450px'
//    }
// `
