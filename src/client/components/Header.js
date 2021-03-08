import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  return (
    <header>
      <nav className="teal">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              ReactSSR
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/users">USERS</Link>
              </li>
              <li>
                <Link to="/admins">ADMINS</Link>
              </li>
              <li>
                {auth ? <a href="/api/logout">LOGOUT</a> : <a href="/api/auth/google">LOGIN</a>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
