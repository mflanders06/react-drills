import React, { Component } from 'react';
import ToDo from './Components/ToDo';
import NewTask from './Components/NewTask';
import List from './Components/List';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      list:[]
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render(){
    //console.log(this.state.list);
    return(
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.addItem}/>
        <List toDoList={this.state.list} />
      </div>
    )
  }

}

export default App;