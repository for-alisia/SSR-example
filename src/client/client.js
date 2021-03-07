// This file uses by webpack to create client's bundle
/** Dependencies */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

/** Routes */
import Routes from './Routes';

/** Reducer */
import reducers from './reducers';

// @ts-ignore
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider
    // @ts-ignore
    store={store}
  >
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
