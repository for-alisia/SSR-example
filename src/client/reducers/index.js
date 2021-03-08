import { combineReducers } from 'redux';

/** Reducers */
import usersReducer from './users.reducer';
import authReducer from './auth.reducer';
import adminsReducer from './admins.reducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
});
