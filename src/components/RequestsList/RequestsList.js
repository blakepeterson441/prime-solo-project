import React, {Component} from 'react';
import {connect} from 'react-redux';

class RequestsList extends Component {

    render() {
        return (
            <>
                <li>
                    <div>
                        <p>Username: <b>{this.props.player.username}</b></p>
                    </div>
                   <button onClick={() => this.props.addPlayer(this.props.player)}>Accept</button>
                   <button onClick={() => this.props.deletePlayer(this.props.player)}>Decline</button>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(RequestsList);