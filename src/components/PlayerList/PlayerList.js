import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PlayerList.css';

// Material UI
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';

class PlayerList extends Component {

    render() {
        return (
            <>
                <li>
                    <div>
                        <p>Username: <b>{this.props.player.username}</b></p>
                        <p>Game: <b>{this.props.player.name}</b></p>
                        <p>Overall Skill: <b>{this.props.player.overall_skill}</b></p>
                        <p>Offensive Skill: <b>{this.props.player.offensive_skill}</b></p>
                        <p>Defensive Skill: <b>{this.props.player.defensive_skill}</b></p>
                        <p>Aggression: <b>{this.props.player.aggression}</b></p>
                    </div>
                    <Tooltip title="Add"><button className="button" onClick={() => this.props.acceptRequest(this.props.player)}><CheckCircleOutline /></button></Tooltip>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PlayerList);