import React from 'react';
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home'
import Movies from './component/movies'
import Series from './component/series';


function notFound() {
  return  <h1>404 Page not found</h1>
  
}

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/movies' component = {Movies} />
        <Route exact path='/series' component = {Series} />
        <Route component ={notFound} />
    </Switch>
</Router>

  );
}

export default App;
