import React, {Component} from 'react';
import {connect} from 'react-redux';

class FriendsList extends Component {

    deleteHandler = () => {
        console.log('REMOVE_FRIEND');
    }

    render() {
        return (
            <>
                <li>
                    <h2>Friends</h2>
                    <div>
                        <p>Username: <b>{this.props.friend.username}</b></p>
                    </div>
                   <button onClick={this.deleteHandler}>Delete</button>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(FriendsList);