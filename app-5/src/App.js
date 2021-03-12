import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      imgPath: 'https://github.com/DevMountain/react-drills/raw/assets/5.png'
    }
  }

  render(){
    return(
      <div className="App">
        <Image imgPath={this.state.imgPath} />
      </div>
    )
  }
}

export default App;
