import React, { Component } from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    loginClick(){
        let innerUser = document.getElementById("userName").value;
        let innerPass = document.getElementById("password").value;
        alert( 'Username: ' + innerUser + ' Password: ' + innerPass );
    }

    render(){
        return(
            <div>
                <input id="userName"></input>
                <input id="password"></input>
                <button onClick={ () => { this.loginClick() } } >Login</button>
            </div>
        )
    }
}

export default Login;