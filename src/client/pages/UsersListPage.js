/** Dependencies */
import React, { Component } from 'react';
import { connect } from 'react-redux';
/** Redux */
import { fetchUsers } from '../actions';

class UsersListPage extends Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {this.props.users && this.props.users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

/** Server function (executes before sending the response) */
function loadData(store) {
  return store.dispatch(fetchUsers());
}

/** Export an object {component:..., loadData: function()...} */
export default { component: connect(mapStateToProps)(UsersListPage), loadData };
