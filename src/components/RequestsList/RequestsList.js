import React, {Component} from 'react';
import {connect} from 'react-redux';
import './RequestsList.css';

//Material UI
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';

class RequestsList extends Component {

    render() {
        return (
            <>
                <li>
                    <div>
                        <p>Username: <b>{this.props.player.username}</b></p>
                    </div>
                    <Tooltip title="Add"><button className="button" onClick={() => this.props.acceptRequest(this.props.player)}><CheckCircleOutline /></button></Tooltip>
                    <Tooltip title="Decline"><button className="button" onClick={() => this.props.deletePlayer(this.props.player)}><RemoveCircleOutline /></button></Tooltip>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(RequestsList);