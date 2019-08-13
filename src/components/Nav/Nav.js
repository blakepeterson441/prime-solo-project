import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Ticklinder</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/profile">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Profile' : 'Login / Register'}
      </Link>
      <Link className="nav-link" to="/edit">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Edit Profile' : 'Login / Register'}
      </Link>
      <Link className="nav-link" to="/friends">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Friends' : 'Login / Register'}
      </Link>
      {/* Show the link to the search page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/search">
            Search
          </Link>
          <LogOutButton className="nav-link"/>
        </>
      )}
      <Link className="nav-link" to="/admin">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Admin' : 'Login / Register'}
      </Link>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
