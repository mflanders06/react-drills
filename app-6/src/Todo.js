import React, { Component } from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        console.log('ToDo stuff' + this.props.toDoList);
        return(
            <div>
                {this.props.toDoList.map( val => {return ('<h2>' + val + '<h2>')} )}
            </div>
        );
    };
}

export default Todo;