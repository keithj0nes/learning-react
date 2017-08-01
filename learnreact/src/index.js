import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Link } from "react-router-dom";
import history from './history';

import About from './pages/About';
import Featured from './pages/Featured';
import Settings from './pages/Settings';


import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(

  //////// OLD WAY WITH import { Router, IndexRoute } from "react-router" VERSION 3- ///////
  // <Router history={hashHistory}>
  //   <Route path="/" component={App}>
  //     <IndexRoute component={Featured}></IndexRoute>
  //     <Route path="about" component={About}></Route>
  //     <Route path="settings" component={Settings}></Route>
  //   </Route>
  // </Router>

  // NEW WAY WITH import { HashRouter, Route, Link } from "react-router-dom" VERSION 4+ ////////
  <BrowserRouter history={history}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/featured" component={Featured} />
      <Route path="/settings" component={Settings} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
