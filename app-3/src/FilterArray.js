import React, { Component } from 'react';

class FilterArray extends Component {
    constructor(){
        super();
        this.state = {
            originalArray: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Blueberry'],
            editArray: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Blueberry'],
            userInput: ''
        }
    }

    inputHandler(val){
        this.setState({ userInput: val })
        let innerInput = this.state.userInput;

        let innerEditArray = this.state.originalArray;

        if (innerInput === ''){
            this.setState({ editArray: innerEditArray });
        }
        else if (innerInput !== ''){
            let innerArray = innerEditArray.filter( val => val.includes(innerInput))
            this.setState({ editArray: innerArray })
        }
    }

    render(){
        console.log('My Array is: ' + this.state.editArray);
        console.log('My userInput is: ' + this.state.userInput)
        return(
            <div>
                <input onChange={ (e) => this.inputHandler (e.target.value)}></input>
                {this.state.editArray.map( val => (<h1 key={val}>{val}</h1> ) )}
            </div>
        )
    }

}

export default FilterArray;