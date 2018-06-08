import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import UpcomingShows from './components/UpcomingShows';
import News from './components/News';
import Music from './containers/Music';
import Videos from './components/Videos';
import SoundsIllustrated from './components/SoundsIllustrated';

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
            <Route exact path="/upcomingshows" component={UpcomingShows} />
            <Route exact path="/news" component={News} />
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
