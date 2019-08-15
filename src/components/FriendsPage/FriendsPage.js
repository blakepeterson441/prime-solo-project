import React, {Component} from 'react';
import {connect} from 'react-redux';
import FriendsList from '../FriendsList/FriendsList';
import RequestsList from '../RequestsList/RequestsList';

class FriendsPage extends Component {

  componentDidMount = () => {
    console.log('componentDidMount FriendsPage');
    this.props.dispatch({
      type: 'SEARCH_FRIENDS',
      payload: this.props.reduxStore.user.id
    })
    this.props.dispatch({
      type: 'SEARCH_REQUESTS',
      payload: this.props.reduxStore.user.id
    })

  }

  deletePlayer = (player) => {
    console.log('REMOVE_FRIEND');
    let data = {
      user1: this.props.reduxStore.user.id,
      user2: player.friend_id
    }
    this.props.dispatch({
      type: 'REMOVE_FRIEND',
      payload: data
    })
  }

  declinePlayer = (player) => {
    console.log('REMOVE_FRIEND');
    
  }

  acceptRequest = (player) => {
    console.log('ACCEPT_REQUEST');
  }

  render(){
    return(
      <>
        <ul> 
          <h2>Friend Requests</h2>
          {this.props.reduxStore.showRequestsReducer.map( (player, index) => 
                    <RequestsList player={player} key={index} 
                    deletePlayer={this.deletePlayer} acceptRequest={this.acceptRequest}/>
                )}  
          
          <h2>Friends</h2>
          {this.props.reduxStore.showFriendsReducer.map( (player, index) => 
                    <FriendsList player={player} key={index} deletePlayer={this.deletePlayer}/>
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
