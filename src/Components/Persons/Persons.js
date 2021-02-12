import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render() {
        console.log("Persons.js render");
        return this.props.persons.map((prn, index)=> {
            return <Person 
            click={()=> this.props.clicked(index)}
            name={prn.name}
            from={prn.from}
            key={prn.id}
            changed= {(event)=> this.props.changed(event, prn.id)}
            />
      });
    }
} 

export default Persons;