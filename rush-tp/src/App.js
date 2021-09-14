import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home';
import Movies from './component/movies';
import Series from './component/series';
import Error from './component/error'

function App() {
  return (
    <Router>
      {/* Header */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/movies' component={Movies} />
        <Route exact path='/series' component={Series} />
        <Route component={Error} />
      </Switch>
      {/* Footer */}
    </Router>
);
}

export default App;
