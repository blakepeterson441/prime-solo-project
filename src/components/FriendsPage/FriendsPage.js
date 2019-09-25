import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendsList from '../FriendsList/FriendsList';
import RequestsList from '../RequestsList/RequestsList';
import './FriendsPage.css';

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

  acceptRequest = (player) => {
    console.log('ACCEPT REQUEST');
  }

  checkRequests = (player, index) => {
    if (player.approved === false) {
      return (
        <RequestsList player={player} key={index}
          deletePlayer={this.deletePlayer} acceptRequest={this.acceptRequest} />
      );
    } else {
      return (<></>);
    }
  }

  checkApproved = (player, index) => {
    if (player.approved === true) {
      return (
        <FriendsList player={player} key={index} deletePlayer={this.deletePlayer} />
      );
    } else {
      return (<></>);
    }
  }

  render() {
    return (
      <>
        <ul>
          <h2>Friend Requests</h2>
          {this.props.reduxStore.friendsReducer.map((player, index) => this.checkRequests(player, index) 
          )}

          <h2>Friends</h2>
          {this.props.reduxStore.friendsReducer.map((player, index) => this.checkApproved(player, index) 
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
