import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

//Material-UI Icons
import {withStyles} from '@material-ui/core/styles';
import UserIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  icons: {
    color: 'pink'
  }
})


class Nav extends Component {

  handleOpenProfile = (event) => {
    this.props.history.push('/profile');
  }

  render() {
    const {classes} = this.props;
    return(
      <div className="nav">
        <Link to="/landingpage">
          <h2 className="nav-title">Player 2</h2>
        </Link>
        <div className="nav-right">
          <Tooltip title="Profile">
            <Link className="nav-link" to="/profile">
              <UserIcon />
            </Link>
          </Tooltip>
          <Tooltip title="Friends">
            <Link className="nav-link" to="/friends">
              <PeopleIcon />
            </Link>
          </Tooltip>
          {/* Show the link to the search page and the logout button if the user is logged in */}
          {this.props.user.id && (
            <>
              <Tooltip title="Search Players">
                <Link className="nav-link" to="/search">
                  <SearchIcon />
                </Link>
              </Tooltip>
              <LogOutButton className="nav-link"/>
            </>
          )}
          <Link className="nav-link" to="/admin">
            {/* Show this link if they are logged in or not,
            but call this link 'Home' if they are logged in,
            and call this link 'Login / Register' if they are not */}
            {this.props.user.id ? 'Admin' : 'Login / Register'}
          </Link>
        </div>
      </div>
    )
  }
}

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = reduxStore => ({
  user: reduxStore.user,
  errors: reduxStore.errors,
  reduxStore
});

export default withStyles(styles)(connect(mapStateToProps)(Nav));
