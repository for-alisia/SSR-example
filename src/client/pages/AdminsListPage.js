import React from 'react';
import { connect } from 'react-redux';

import { fetchAdmins } from '../actions';

import withAuth from '../components/hocs/withAuth';

class AdminsListPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }
  render() {
    return (
      <div className="container">
        <h1>Admins</h1>
        <ul>
          {this.props.admins &&
            this.props.admins.map(({ name, id }) => (
              <li key={id}>
                <div className="row">
                  <div className="col s12 m5">
                    <div className="card-panel teal">
                      <span className="white-text">ADMIN: {name}</span>
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

const mapStateToProps = ({ admins }) => ({ admins });

export async function loadData({ dispatch }) {
  return dispatch(fetchAdmins());
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(withAuth(AdminsListPage)),
  loadData,
};
