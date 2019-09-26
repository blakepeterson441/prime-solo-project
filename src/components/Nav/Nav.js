import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

//Material-UI Icons
import UserIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import Tooltip from '@material-ui/core/Tooltip';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';



class Nav extends Component {

  handleOpenProfile = (event) => {
    this.props.history.push('/profile');
  }

  render() {
    return(
      <div className="nav">
        <Link to="/landingpage">
          <h2 className="nav-title">Player 2</h2>
        </Link>
        <div className="nav-right">
          
          {/* Show the link to the search page and the logout button if the user is logged in */}
          {this.props.user.id && (
            <>
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
              <Tooltip title="Search Players">
                <Link className="nav-link" to="/search">
                  <SearchIcon />
                </Link>
              </Tooltip>
              <Tooltip title="Admin">
                <Link className="nav-link" to="/admin">
                  <SupervisedUserCircle />
                </Link>
              </Tooltip>
              <LogOutButton className="nav-link"/>
            </>
          )}
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

export default connect(mapStateToProps)(Nav);
