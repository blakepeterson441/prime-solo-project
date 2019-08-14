import React, {Component} from 'react';
import {connect} from 'react-redux';

class FriendsList extends Component {

    render() {
        return (
            <>
                <li>
                    <div>
                        <p>Username: <b>{this.props.player.username}</b></p>
                    </div>
                   <button onClick={() => this.props.deletePlayer(this.props.player)}>Delete</button>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(FriendsList);