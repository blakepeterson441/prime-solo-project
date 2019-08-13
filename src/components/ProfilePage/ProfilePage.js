import React, {Component} from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const ProfilePage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

// const ProfilePage = (props) => (
//   <div>
//     <h1 id="welcome">
//       Welcome, { props.user.username }!
//     </h1>
//     <p>Your ID is: {props.user.id}</p>
//     {/* <LogOutButton className="log-in" /> */}
//   </div>
// );

class ProfilePage extends Component {

  render(){
    return(
      <>
      <div>
      <h1>
        Welcome, { this.props.friend }!
      </h1>
      <p>Your ID is: {this.props.users}</p>
      {/* <LogOutButton className="log-in" /> */}
      </div>
      </>
    )
  }

}


// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });

// const mapStateToProps = state => ({
//   user: state.user,
// });

// this allows us to use <App /> in index.js

// export default connect(mapStateToProps)(ProfilePage);

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(ProfilePage);