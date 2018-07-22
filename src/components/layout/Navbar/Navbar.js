import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark  mb-4 nav-background">
        <div className="container">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">

              </li>
              <li className="nav-item">

              </li>



            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

export default Navbar;


