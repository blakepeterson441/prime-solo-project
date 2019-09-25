import React, {Component} from 'react';
import {connect} from 'react-redux';

//Material UI
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Tooltip from '@material-ui/core/Tooltip';

class FriendsList extends Component {

    render() {
        return (
            <>
                <li>
                    <div>
                        <p>Username: <b>{this.props.player.username}</b></p>
                    </div>
                    <Tooltip title="Delete"><button onClick={() => this.props.deletePlayer(this.props.player)}><DeleteForeverIcon /></button></Tooltip>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(FriendsList);