import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { withAuth } from '@okta/okta-react';
import './Home.css';

export default class Home extends Component {




  render() {





    return (
      <div className="jumbotron mainPortal">
        <div className="topContent">
          <h1 className="display-6">Mozart Mechanics</h1>
          <p>Officia aliquip cupidatat aliquip Lorem fugiat nostrud ad minim non adipisicing ullamco id laborum. Culpa nisi duis tempor do esse aute veniam occaecat aute sit sint nisi dolore quis. Dolore aliquip est officia aute nisi ea nulla ex do duis nisi ut duis. </p>
          <p>Commodo anim laboris ullamco culpa nisi in voluptate. Enim nisi incididunt quis do sunt in id excepteur Lorem ullamco ullamco. Excepteur do consequat qui elit elit eiusmod veniam consectetur veniam id.
          </p>
        </div>
        <div class="mainContent">

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
};