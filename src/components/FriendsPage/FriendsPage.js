import React, {Component} from 'react';
import {connect} from 'react-redux';
import FriendsList from '../FriendsList/FriendsList';

class FriendsPage extends Component {

  componentDidMount = () => {
    console.log('componentDidMount FriendsPage');
    this.props.dispatch({
      type: 'SEARCH_FRIENDS',
      payload: this.props.reduxStore.user.id
    })

  }

  render(){
    return(
      <>
      <p>hi</p>
        <ul>
          {this.props.reduxStore.showFriendsReducer.map( (friend, index) => 
                    <FriendsList friend={friend} key={index}/>
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
