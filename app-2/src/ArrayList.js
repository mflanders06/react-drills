import React, { Component } from 'react';

class ArrayList extends Component {
    constructor(){
        super();
        this.state = {
            myArrayList: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Blueberry']
        }
    }

    render(){
        return(
            <div>
                {this.state.myArrayList.map(val => ( <h1 key={val}>{val}</h1> ) ) }
            </div>
        )
    }
}

export default ArrayList;