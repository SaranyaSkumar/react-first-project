// import logo from './logo.svg';
import classes from './App.css';
import React, {Component} from 'react';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Header from '../Components/Header/Header';
// import styled from 'styled-components'


class App extends Component {
  constructor(props){
    super(props);
    console.log("app.js contructor");
  }

  state = {
    person:[
      {id: '1', name: 'saranya', from :'Kerala'},
      {id: '2', name: 'salu', from :'Adoor'},
      {id: '3', name: 'vipin', from :'nsw'},
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps");
    return state;
  }

  switchNameHandler=(name) =>{
    console.log("clicked");
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

  componentDidMount(){
    console.log("componentDidMount")
  }

  render() {
    console.log("app.js render");

    let person= null;
    if(this.state.showPersons === true){
      person=<Persons 
        persons={this.state.person}
        clicked={this.deleteHandler}
        changed={this.nameChangeHandler}
        />
    }

    return (
      <div className={classes.App}>
        <Header header='React Application'/>
       <Cockpit 
       title={this.props.appTitle}
        showPersons={this.state.showPersons}
        person={this.state.person}
        clicked={this.toggleHandler}
        />
        {person}
      </div>
      );
    }
}

export default App;
