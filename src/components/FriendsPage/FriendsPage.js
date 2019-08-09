import React, {Component} from 'react';
import {connect} from 'react-redux';
import FriendsList from '../FriendsList/FriendsList';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class FriendsPage extends Component {

  render(){
    return(
      <>
      <p>hi</p>
        <ul>
          {this.props.reduxStore.setSkillsReducer.map( (player, index) => 
                    <FriendsList player={player} key={index}/>
                )}  
        </ul>
      </>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(FriendsPage);
