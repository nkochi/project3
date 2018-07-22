import React, { Component } from 'react';
import './App.css'


import Header from './components/layout/Header'
import Router from './components/pages/Router'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Router />

      </div>
    );
  }
}

export default App
