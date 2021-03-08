import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  class RequireAuth extends React.Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div className="container center-align">Loading...</div>;
        default:
          return <WrappedComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(RequireAuth);
};

export default withAuth;
