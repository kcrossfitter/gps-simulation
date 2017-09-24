import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import jQuery from 'jquery';
import Popper from 'popper.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import reducers from './reducers';
import GPS from './components/GPS';
import DGPS from './components/DGPS';
import NotFound from './components/NotFound';
import Nav from './components/Nav';

window.$ = window.jQuery = jQuery;
window.Popper = Popper;

require('bootstrap');

const createStoreWithMiddleware = 
applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={GPS} />
            <Route path="/dgps" component={DGPS} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

