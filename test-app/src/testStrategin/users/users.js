import React, { Component } from 'react';
const axios = require("axios").default;

export default class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
        token: this.props.childToken,
        users: []       
    }
    
}
 componentDidMount() {
    axios.get("http://127.0.0.1:3001/api/auth/users",
    {headers: {
      'Authorization': this.state.token

    }}).then((response) => {
      this.setState({users:response.data});
    })
  
}
    render() {
      const userList = this.state.users.map((x)=> <p key={x._id}> {x.email}</p>);
      
        return(
          <div>
            <p>Users</p>
            
            {userList}
          </div>

        )
      }
}