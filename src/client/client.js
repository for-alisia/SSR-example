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
import axios from 'axios';

/** Routes */
import Routes from './Routes';

/** Reducer */
import reducers from './reducers';

// Config of an axios instance for client (pass this instance to thunk)
const axiosInstance = axios.create({
  baseURL: '/api',
});

const store = createStore(
  reducers,
  // @ts-ignore
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider
    // @ts-ignore
    store={store}
  >
    <BrowserRouter>
      <div>
        {renderRoutes(
          // @ts-ignore
          Routes
        )}
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
