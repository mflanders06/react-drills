import React, { Component } from 'react';

class NewTask extends Component{
    constructor(){
        super();
        this.state={
            userInput:''
        };

        this.handleAdd = this.handleAdd.bind(this);

    }

    handleChange = (input) => {
        this.setState({ userInput: input });
    }

    handleAdd () {
        this.props.add(this.state.userInput);
        this.setState({ userInput: '' })
    }

    render(){
        return(
            <div>
                <input
                 id="newToDo"
                 value={this.state.userInput}
                 placeholder="Enter new items here"
                 onChange={e => this.handleChange(e.target.value) }
                >
                </input>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask;