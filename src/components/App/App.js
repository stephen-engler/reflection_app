import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import AddPage from '../add-page/AddPage'
import ViewPage from '../view-page/ViewPage'
import Header from '../Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <nav>
              <ul>
                {/* Sets links */}
                <li>
                  <Link className="Nav-Bar" to="/">Add New Reflection</Link>
                </li>
                <li>
                  <Link className="Nav-Bar" to="/view">View Reflections</Link>
                </li>
              </ul>
            </nav>
            {/* Sets routes for links */}
            < Route exact path='/' component={AddPage} />
            < Route path='/view' component={ViewPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
