import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileSkills extends Component {

    render() {
        return (
            <>
                <li>
                    <div>
                        <p>Game: <b>{this.props.player.name}</b></p>
                        <p>Overall Skill: <b>{this.props.player.overall_skill}</b></p>
                        <p>Offensive Skill: <b>{this.props.player.offensive_skill}</b></p>
                        <p>Defensive Skill: <b>{this.props.player.defensive_skill}</b></p>
                        <p>Aggression: <b>{this.props.player.aggression}</b></p>
                    </div>
                </li>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(ProfileSkills);