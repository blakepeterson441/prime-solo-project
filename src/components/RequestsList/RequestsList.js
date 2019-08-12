import React, {Component} from 'react';
import {connect} from 'react-redux';

class RequestsList extends Component {

    acceptPlayer = () => {
        console.log('clicked accept');
    }

    declinePlayer = () => {
        console.log('clicked decline');
    }

    render() {
        return (
            <>
                <h2>Friend Requests</h2>
                <li>
                    <div>
                        <p>Username: <b>{this.props.friend.username}</b></p>
                    </div>
                   <button onClick={this.acceptPlayer}>Accept</button>
                   <button onClick={this.declinePlayer}>Decline</button>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(RequestsList);