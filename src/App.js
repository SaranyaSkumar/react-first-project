// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import React, {Component} from 'react';
// import styled from 'styled-components'


class App extends Component {
  state = {
    person:[
      {id: '1', name: 'saranya', from :'Kerala'},
      {id: '2', name: 'salu', from :'Adoor'},
      {id: '3', name: 'vipin', from :'nsw'},
    ],
    showPersons: false
  }
  switchNameHandler=(name) =>{
    console.log("clicked");
    // this.state.person[0].name= 'Saranya S kumar';
    this.setState({
      person:[
        {name: 'Saranya S kumar', from :'Kerala'},
        {name: 'salu', from :'Adoor'},
        {name: 'vipin', from :'nsw'},
      ]
    })
  }

  nameChangeHandler=(event,id) =>{
    const personIndx = this.state.person.findIndex(p=>{
      return p.id === id;
    });

    const person = {...this.state.person[personIndx]};

    person.name= event.target.value;

    const persons=[...this.state.person];
    persons[personIndx]= person;
    this.setState({person:persons})
  }

  toggleHandler=() =>{
    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deleteHandler= (prnIndex) =>{
    const person= this.state.person;
    person.splice(prnIndex,1);
    this.setState({person:person})
  }

  render() {
    // const style={
    //   backgroundColor: 'green',
    //   color: 'white',
    //   border: '1px solid pink',
    //   padding: '10px',
    //   cursor: 'pointer',
    //   margin: '4px',
    //   ':hover':{
    //     backgroundColor: 'yellow',
    //     color: 'black'
    //   }
    // }

    // const StyledButton = styled.button`
    //   background-color: ${props => props.alt ? 'red' : 'green'};
    //   color: white;
    //   font: inherit;
    //   border: 1px solid blue;
    //   padding: 8px;
    //   cursor: pointer;
      
    //   &:hover {
    //     background-color: ${props => props.alt ? 'orange' : 'lightgreen'};
    //     color: black;
    //   }
    // `;

    let person= null;
    if(this.state.showPersons === true){
      person=( <div>
        {this.state.person.map((prn, index)=> {
          return <Person 
            click={()=> this.deleteHandler(index)}
            name={prn.name}
            from={prn.from}
            key={prn.id}
            changed= {(event)=> this.nameChangeHandler(event, prn.id)}
             />
        })}
      </div>)
      //  style.backgroundColor= 'red';
      //  style[':hover']={
      //   backgroundColor: 'orange',
      //   color: 'black'
      // }
    }

    const classes = [];
    if(this.state.person.length <= 2){
      classes.push('red');
    }
    if(this.state.person.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi App.js</h1>
        <p className={classes.join(' ')}>Experimenting paragraph</p>
         <button className='button' onClick={this.toggleHandler}>
          Toggle Persons
        </button>
        {person}
      </div>
      );
    }
}

// function App() {
//   return (
//     <div className="App">
//        <h1>Hi App.js</h1>
//        <button onClick={this.switchNameHandler}>Click Me</button>
//        <Person name='saranya' from='kerala' >Yes, I'm the Admin</Person>
//        <Person name='salu' from='adoor'/>
//        <Person name='vipin' from='kollam'/>
//     </div>
//   );
// }

export default App;
