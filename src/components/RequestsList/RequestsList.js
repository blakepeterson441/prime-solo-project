import React, {Component} from 'react';
import {connect} from 'react-redux';

class RequestsList extends Component {

    addHandler = () => {
        console.log('clicked accept');
    }

    deleteHandler = () => {
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
                   <button onClick={this.addHandler}>Accept</button>
                   <button onClick={this.deleteHandler}>Decline</button>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(RequestsList);