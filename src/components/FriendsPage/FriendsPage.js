import React, {Component} from 'react';
import {connect} from 'react-redux';
import FriendsList from '../FriendsList/FriendsList';

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
