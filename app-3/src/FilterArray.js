import React, { Component } from 'react';

class FilterArray extends Component {
    constructor(){
        super();
        this.state = {
            originalArray: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Blueberry'],
            myArray: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Blueberry'],
            userInput: ''
        }
    }

    inputHandler(val){
        let innerOriginalArray = this.state.originalArray;
        let innerInput = this.state.userInput;
        let innermyArray = this.state.myArray

        this.setState({ userInput: val })
        this.setState({ myArray: innerOriginalArray })
        let innerArray = innermyArray.filter( val => val.includes(innerInput))

        this.setState({ myArray: innerArray })
    }

    render(){
        console.log('My Array is: ' + this.state.myArray);
        console.log('My userInput is: ' + this.state.userInput)
        return(
            <div>
                <input onChange={ (e) => this.inputHandler (e.target.value)}></input>
                {this.state.myArray.map( val => (<h1 key={val}>{val}</h1> ) )}
            </div>
        )
    }

}

export default FilterArray;