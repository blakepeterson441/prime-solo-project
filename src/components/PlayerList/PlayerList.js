import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                   <button onClick={() => this.props.addPlayer(this.props.player)}>Add</button>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PlayerList);