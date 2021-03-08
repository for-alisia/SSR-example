/** Dependencies */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
/** Redux */
import { fetchUsers } from '../actions';

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} users were loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }
  render() {
    return (
      <div className="container">
        {this.head()}
        <h1>Users</h1>
        <ul>
          {this.props.users &&
            this.props.users.map(({ name, id }) => (
              <li key={id}>
                <div className="row">
                  <div className="col s12 m5">
                    <div className="card-panel teal">
                      <span className="white-text">USER: {name}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
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
export default { component: connect(mapStateToProps, { fetchUsers })(UsersListPage), loadData };
