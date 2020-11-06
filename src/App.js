import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {Route, HashRouter as Router, Link} from 'react-router-dom';

import Search from './Pages/Search';
import Featured from './Pages/Featured';
import Movie from './components/Movie/Movie';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="navbar">
            <nav className="wrapper">
              <ul>
                <li><Link to="/">Search</Link></li>
                <li><Link to="/featured">Featured</Link></li>
              </ul>
            </nav>
          </div>

          <Route exact path="/" component={Search} />
          <Route  path="/movie/:id" component={Movie} />
          <Route  path="/featured" component={Featured} />
        </Router>
      </Provider>
    );
  }
}

export default App;
