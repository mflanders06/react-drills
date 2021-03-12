import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      toDoList: []
    }
  }

  clickHandler = () => {
    let innerInput = document.getElementById("toDoInput").value;
    let innerArray = this.state.toDoList;

    innerArray.push(innerInput);
    this.setState({ toDoList: innerArray });

  }

  render(){
    return(
      <div className="App">
        <h1>My to-do list:</h1>
        <input id="toDoInput"></input>
        <button onClick={ this.clickHandler }>Add</button>
        <Todo toDoList={this.state.toDoList}/>
      </div>
    )
  }

}

export default App;
