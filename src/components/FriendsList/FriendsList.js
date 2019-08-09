import React, { Component } from 'react';
import { connect } from 'react-redux';

class FriendsList extends Component {

    // state = {
    //     to_id: '',
    //     from_id: '',
    // }

    deletePlayer = () => {
        console.log('deletePlayer');
        // this.props.dispatch({
        //     type: 'ADD_FRIEND',
        //     payload: this.state
        // })
    }

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
                   <button onClick={this.deletePlayer}>Delete</button>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(FriendsList);