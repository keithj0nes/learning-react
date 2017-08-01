import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Router, Route, IndexRoute } from "react-router";
import { HashRouter, Route, Link } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  // <Router history={hashHistory}>
  //   <Route path="/" component={App}>
  //   </Route>
  // </Router>
  <HashRouter>
    <div>
      <Route path="/" component={App}>
      </Route>
    </div>
  </HashRouter>,
  document.getElementById('root')
);

registerServiceWorker();
