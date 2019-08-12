import React, {Component} from 'react';
import {connect} from 'react-redux';

class FriendsList extends Component {

    deletePlayer = () => {
        console.log('deletePlayer');
    }

    render() {
        return (
            <>
                <li>
                    <div>
                        <p>Username: <b>{this.props.friend.username}</b></p>
                    </div>
                   <button onClick={this.deletePlayer}>Delete</button>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(FriendsList);