import React, { Component, useImperativeHandle } from 'react';
import Register from '../register/register';
import Login from '../login/login';
import Users from '../users/users';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            showLogin: true,
            showRegister: false,
            showUsers:false,
            logged:false,
            userId:"",
            token:"",
        };
    }
    
    openRegister(){
      this.setState({showRegister:true, showLogin:false, showUsers:false});
      console.log("trig")      
    }

    openLogin(){
      this.setState({showLogin:true, showRegister:false, showUsers:false})
    }
    openUsers(){
      
      this.setState({showLogin:false, showRegister:false, showUsers:true})
    }

    render() {     

       
        return(            
        <div>         
          {this.state.logged ? <h2 style={{marginTop:"50px", color: "black"}}>Token: {this.state.token} <br/>Id:{this.state.userId} {this.state.showLogin}</h2>  :null}
          {this.state.showLogin ? <Login onLogged={(res)=>this.setState({logged:true, showLogin:false, showRegister:false, showUsers:true,userId:res.userId, token:res.token})}/> : null}  
          {this.state.showUsers ? <Users childToken = {this.state.token}/> : null}
          {this.state.showRegister ? <Register onRegistered={(res)=>this.setState({logged:false, showLogin:true, showRegister:false, showUsers:false})}/> : false}
          <div class="buttons">
          {this.state.logged ? <button  onClick={() => {this.openUsers()}}>Users</button> : null}
          
          
          <button onClick={() => {this.openRegister()}}>Register</button>
          <button onClick={() => {this.openLogin()}}>Login</button>
          </div>

          
        </div>
        )
      }
}