//First failed attempt. (nvm, fixed it)
import React, { Component } from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

/*    numberList(){
        const toDoArray = this.props.toDoList;
        const listItems = toDoArray.map((items) => <h2>{items}</h2>);
        return listItems;
    }
*/
    render(){
        console.log('ToDo stuff' + this.props.toDoList);
        const innerToDo = this.props.toDoList;

        return(
            <div>
                {innerToDo.map((val, i) => 
                    <h2 key={i}>{val}</h2> )}
            </div>
            );
    };
}

export default Todo;