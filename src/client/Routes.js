/** Pages */
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

/** Routes map of app */
export default [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...UsersListPage,
    path: '/users',
  },
];
