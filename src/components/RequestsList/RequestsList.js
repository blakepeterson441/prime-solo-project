import React, {Component} from 'react';
import {connect} from 'react-redux';

//Material UI
import PersonAdd from '@material-ui/icons/PersonAdd';
import PersonAddDisabled from '@material-ui/icons/PersonAddDisabled';
import Tooltip from '@material-ui/core/Tooltip';

class RequestsList extends Component {

    render() {
        return (
            <>
                <li>
                    <div>
                        <p>Username: <b>{this.props.player.username}</b></p>
                    </div>
                    <Tooltip title="Add"><button onClick={() => this.props.addPlayer(this.props.player)}><PersonAdd /></button></Tooltip>
                    <Tooltip title="Decline"><button onClick={() => this.props.deletePlayer(this.props.player)}><PersonAddDisabled /></button></Tooltip>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(RequestsList);