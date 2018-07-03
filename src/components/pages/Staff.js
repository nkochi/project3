import React, { Component } from 'react'
import './Staff.css';

class Staff extends Component {

  state = {
    currentUserName: '',
    currentUserEmaiil: ''
  }

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    })
  }


  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (

      <div>
        <h1> Welcome {currentUserName}</h1>
        <p> Email : {currentUserEmail} </p>
        <p>You have reached the authorized user area of portal</p>
      </div>
    )
  }
}

export default Staff;