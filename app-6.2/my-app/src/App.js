import React, { Component } from 'react';

import ToDo from './ToDo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      input: ''
    };

  }

  handleInputChange = (value) => {
    this.setState({ input: value });
  }

  handleAddTask = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    });
  }

  render() {
    let list = this.state.list.map((val, i) => {
      return <ToDo key={i} task={val} />;
    } );

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={ (e) => { this.handleInputChange(e.target.value) } }
        />

        <button onClick={this.handleAddTask}>Add</button>
        <br></br>

        {list}

      </div>
    )

  }

}

export default App;
