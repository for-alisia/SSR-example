/** Dependencies */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

/** Reducer */
import reducers from '../client/reducers';

export default (req) => {
  // Axios Instance to use on the server
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' },
  });

  return createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
};
