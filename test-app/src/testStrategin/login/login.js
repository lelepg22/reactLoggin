import React, { Component } from "react";
import "../../App.css";
const axios = require("axios").default;

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
    handleSubmit = e => {
        
        e.preventDefault();
        console.log(e.target.email.value);
    
        if (!e.target.email.value) {
          alert("Email is required");
        }
        else if (!e.target.password.value) {
            alert("Password is required");
        }
        axios.post("http://127.0.0.1:3001/api/auth/login", {
            email:e.target.email.value,
            password:e.target.password.value
        }).then((response) => {         
          
          console.log('eita', response)
          this.props.onLogged(response.data);          
            console.log(response.data);
        }) .catch((error) => {
            console.log(error);
          });
          
    }
  render() {
    return (
      <div className="container">
        <div className="form-box">
        <h2>To Login</h2>
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"></span>
                </div>
                <input
                  type="email"
                  name ="email"
                  className="form-control"
                  placeholder="email"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"></span>
                </div>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button className="btn btn-secondary btn-block">
                LOGIN
              </button>           
            </form>
          </div>
        </div>
      </div>
    );
  }
}
