import React from 'react'

function Todo(props) {
    let innerArray = props.toDoList;
    let listItems = innerArray.map((val, i) => <h2 key={i}>{val}</h2> );
    return(listItems);
}

export default Todo;