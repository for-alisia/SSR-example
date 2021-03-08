export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch, getState, api) => {
  // api was passed into thunk - axiosInstance predefined differently for the client and the server
  const res = await api.get('/users');

  dispatch({ type: FETCH_USERS, payload: res.data });
};

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');

  dispatch({ type: FETCH_CURRENT_USER, payload: res.data });
};

export const FETCH_ADMINS = 'FETCH_ADMINS';

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({ type: FETCH_ADMINS, payload: res.data });
};
