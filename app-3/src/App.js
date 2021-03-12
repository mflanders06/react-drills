import React, { Component } from 'react';
import "./App.css";



class App extends Component{
    constructor(){
        super();

        this.state={
            origList:['apple', 'banana', 'orange', 'mango', 'pineapple', 'blueberry'],
            userInput: ""
        };
    }

    handleChange(input){
        this.setState({ userInput: input });
    }

    render(){
        let displayList = this.state.origList
        .filter(( val, index ) => {
            return val.includes(this.state.userInput);
        })
        .map(( val, index ) => {
            return <h2 key={index}>{val}</h2>;
        });

        return(
            <div className="App">
                <input onChange={e => this.handleChange(e.target.value) } type="text" />
                {displayList}
            </div>
        );
    }

}

export default App;