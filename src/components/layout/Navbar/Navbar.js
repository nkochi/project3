import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark  mb-4 nav-background">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Project 3
        </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
              </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/staff">
                  Members
              </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/webMidi">
                  Midi Test Page
              </Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

export default Navbar;



