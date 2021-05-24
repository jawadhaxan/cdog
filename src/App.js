import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Coins from './components/pages/Coins';
import Connect from './components/pages/Connect';
import Blog from './components/pages/Blog';

function App() {
  return (
    <div className="video">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/howtobuy' component={About} />
          <Route path='/whitepaper' component={Coins} />
          <Route path='/Connect' component={Connect} />
          <Route path='/Blog' component={Blog} />
        </Switch>
      </Router>
   
    </div>
  );
}

export default App;
