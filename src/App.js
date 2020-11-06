import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Landing from './components/home/landing';
import Movie from './components/Movie/Movie';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
