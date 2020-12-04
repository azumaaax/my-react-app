import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/pages/login';
import Confirm from './components/pages/confirm';
import Top from './components/pages/top';
import About from './components/pages/about';
import './App.scss';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Login}></Route>
      <Route path="/top" component={Top}></Route>
      <Route path="/confirm" component={Confirm}></Route>
      <Route path="/about" component={About}></Route>
    </Router>
  );
}

export default App;
