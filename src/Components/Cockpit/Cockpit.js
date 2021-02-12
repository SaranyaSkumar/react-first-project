import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const anotherClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass= classes.Red;
    }
    
    if(props.person.length <= 2){
    anotherClasses.push(classes.red);
    }
    if(props.person.length <= 1){
    anotherClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={anotherClasses.join(' ')}>Experimenting paragraph</p>
            <button className={classes.Button} onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;