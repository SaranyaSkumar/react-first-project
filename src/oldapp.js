// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import React, {Component} from 'react';


class App extends Component {
  state = {
    person:[
      {name: 'saranya', from :'Kerala'},
      {name: 'salu', from :'Adoor'},
      {name: 'vipin', from :'nsw'},
    ]
  }
  switchNameHandler=() =>{
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
  render() {
    return (
      <div className="App">
        <h1>Hi App.js</h1>
        <button onClick={this.switchNameHandler}>Click Me</button>
        <Person name={this.state.person[0].name} from={this.state.person[0].from} >Yes, I'm the Admin</Person>
        <Person name={this.state.person[1].name} from={this.state.person[1].from}/>
        <Person name={this.state.person[2].name} from={this.state.person[2].from}/>
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
