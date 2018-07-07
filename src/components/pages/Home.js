import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import './Home.css';

export default withAuth(class Home extends Component {


  state = { authenticated: null };

  checkAuthentication = async () => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  login = async () => {
    this.props.auth.login('/');
  }

  logout = async () => {
    let loginRedirect = this.login
    // Redirect to '/' after logout
    //if session is active
    this.props.auth.logout('/')
      .then(function (out) {
        console.log("session is deleted");
      })
      .catch(function (error) {
        //if session is inactive
        loginRedirect();
      })
  }


  render() {
    if (this.state.authenticated === null) return null;

    const mainContent = this.state.authenticated ?
      (
        <div>
          <p className="lead">You have entered the member portal,
            <Link to="staff">click here</Link>
          </p>
          <button className="btn btn-light btn-lg" onClick={this.logout}>Logout</button>
        </div>
      ) :
      (

        <div>
          <p className="lead">If you are a member, please enter your credentials
          </p>
          <button className="btn btn-dark btn-lg" onClick={this.login}>Logout</button>

        </div>
      );

    return (
      <div className="jumbotron mainPortal">
        <div className="topContent">
          <h1 className="display-6">Project 3 Portal</h1>
          <p>Officia aliquip cupidatat aliquip Lorem fugiat nostrud ad minim non adipisicing ullamco id laborum. Culpa nisi duis tempor do esse aute veniam occaecat aute sit sint nisi dolore quis. Dolore aliquip est officia aute nisi ea nulla ex do duis nisi ut duis. </p>
          <p>Commodo anim laboris ullamco culpa nisi in voluptate. Enim nisi incididunt quis do sunt in id excepteur Lorem ullamco ullamco. Excepteur do consequat qui elit elit eiusmod veniam consectetur veniam id.
          </p>
        </div>
        <div class="mainContent">
          {mainContent}
          <ul class="set" id="keyboardLayout">
          <li class="white b"></li>
          <li class="black as"></li>
          <li class="white a"></li>
          <li class="black gs"></li>
          <li class="white g"></li>
          <li class="black fs"></li>
          <li class="white f"></li>
          <li class="white e"></li>
          <li class="black ds"></li>
          <li class="white d"></li>
          <li class="black cs"></li>
          <li class="white c"></li>
      </ul>

        </div>
      </div>
    );
  }
});