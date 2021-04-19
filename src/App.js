import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/pages/login';
import Confirm from './components/pages/confirm';
import Top from './components/pages/top';
import About from './components/pages/about';
import Company from './components/pages/company/index';
import './App.scss';
import SYSTEM_CONST from './system_const';

// test commmit

function App() {
  return (
    <Router>
      <Route path={SYSTEM_CONST.URL.LOGIN}   component={Login} exact></Route>
      <Route path={SYSTEM_CONST.URL.TOP}     component={Top}></Route>
      <Route path={SYSTEM_CONST.URL.CONFIRM} component={Confirm}></Route>
      <Route path={SYSTEM_CONST.URL.ABOUT}   component={About}></Route>
      <Route path={SYSTEM_CONST.URL.COMPANY} component={Company}></Route>
    </Router>
  );
}

export default App;
