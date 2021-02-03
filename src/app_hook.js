// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import React, {useState} from 'react';


const Aapp = props => {
  const [ personsState, setPersonsState ] = useState({
    person:[
      {name: 'saranya', from :'Kerala'},
      {name: 'salu', from :'Adoor'},
      {name: 'vipin', from :'nsw'},
    ]
  });
  const switchNameHandler=() =>{
    console.log("clicked");
    // this.state.person[0].name= 'Saranya S kumar';
    setPersonsState({
      person:[
        {name: 'Saranya S kumar', from :'Kerala'},
        {name: 'salu', from :'Adoor'},
        {name: 'vipin', from :'nsw'},
      ]
    })
  }

  
    return (
      <div className="App">
        <h1>Hi App.js</h1>
        <button onClick={switchNameHandler}>Click Me</button>
        <Person name={personsState.person[0].name} from={personsState.person[0].from} >Yes, I'm the Admin</Person>
        <Person name={personsState.person[1].name} from={personsState.person[1].from}/>
        <Person name={personsState.person[2].name} from={personsState.person[2].from}/>
      </div>
      );
    
}

export default Aapp;
