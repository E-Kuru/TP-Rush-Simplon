import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home'
import Movies from './component/movies'


function notFound() {
  return  <h1>404 Page not found</h1>
  
}

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/movies' component = {Movies} />
        {/* <Route exact ='Users' component ={UsersRegister} /> */}
        <Route component ={notFound} />
    </Switch>
</Router>

  );
}

export default App;
