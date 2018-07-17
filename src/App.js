import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Navbar from './components/layout/Navbar';

import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import SignUp from './components/pages/SignUp'
//import webMidi from './components/pages/webMidi';
import { withAuthenticator } from 'aws-amplify-react';

import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (

      <Router>


        <div className="App">
          <SignUp />
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/staff" exact={true} component={Staff} />



          </div>
        </div>

      </Router>
    );
  }
}

export default withAuthenticator(App);
