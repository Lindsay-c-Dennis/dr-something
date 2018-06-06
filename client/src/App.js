import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src="/drsomething-banner.jpg" alt="logo" width="100%"/>
        </header>
      <NavBar />
      </div>
      
    );
  }
}

export default App;
