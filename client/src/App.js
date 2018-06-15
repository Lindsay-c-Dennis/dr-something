import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ReviewBoard from './containers/ReviewBoard';
import Music from './containers/Music';
import Videos from './containers/Videos';
import SoundsIllustrated from './containers/SoundsIllustrated';


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header>
          <img src="/drsomething-banner.jpg" alt="logo" width="100%"/>
        </header>
        <Router>
          <div>
            <NavBar />
              <Route exact path="/" component={Home} />
              <Route exact path="/reviewboard" component={ReviewBoard} />
              <Route exact path="/music" component={Music} />
              <Route exact path="/videos" component={Videos} />
              <Route exact path="/soundsillustrated" component={SoundsIllustrated} />
          </div>
        </Router>    
      </div>
    );
  }
}



export default App;


