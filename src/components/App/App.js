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
        <br/>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Add New Reflection</Link>
                </li>
                <li>
                  <Link to="/view">View Reflections</Link>
                </li>
              </ul>
            </nav>
            < Route exact path='/' component={AddPage} />
            < Route path='/view' component={ViewPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
