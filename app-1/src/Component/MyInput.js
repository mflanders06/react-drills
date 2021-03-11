import React, { Component } from 'react'

class MyInput extends Component {
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }

    inputHandler = (val) => {
        this.setState({ userInput: val });
    }

    render(){
        console.log(this.state.userInput)
        return(
            <div>
                <input className="myInputBox" onChange={ (e) => this.inputHandler(e.target.value)} ></input>
                <h2>{this.state.userInput}</h2>
            </div>
        )
    }
}

export default MyInput;