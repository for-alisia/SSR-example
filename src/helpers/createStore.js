/** Dependencies */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/** Reducer */
import reducers from '../client/reducers';

export default () => {
  return createStore(reducers, {}, applyMiddleware(thunk));
};
