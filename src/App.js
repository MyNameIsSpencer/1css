import {
  Route,
  Link
} from 'react-router-dom';


import React, { Component } from 'react';
import './App.css';
import './Background.css';
import './Border.css';
import Background from './Background.js';
import Border from './Border.js';


class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/' className="heads-up-nav">Home </Link>
          <Link to="/background" className="heads-up-nav">Backgrounds</Link>
          <Link to="/border" className="heads-up-nav">Borders</Link>

        </nav>
        <div className="App">
          <header className="App-header">
            <h1 className="h1dog">
              Welcome to Barefoot CSS
            </h1>
          </header>
        </div>
        <div>
          <Route path="/background" component={Background} />
          <Route path="/border" component={Border} />
        </div>
      </div>
    );
  }
}

export default App;
