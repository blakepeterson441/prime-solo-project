import React, {Component} from 'react';
import {connect} from 'react-redux';
import PlayerList from '../PlayerList/PlayerList';
import './PlayersToAdd.css';


class PlayersToAdd extends Component {


    addPlayer = (player) => {
        console.log('addPlayer', player);
        let data = {
            user1: this.props.reduxStore.user.id,
            user2: player.id
        }
        this.props.dispatch({
            type: 'ADD_FRIEND',
            payload: data
        })
    }

    checkPlayer = (player, index) => {
        if (this.props.reduxStore.user.id === player.id){
            return (<></>);
        } else {
            return (
                <PlayerList player={player} key={index} addPlayer={this.addPlayer} />
            );
        }
    }

    render() {
        return (
            <>
                <ul> 
                    {this.props.reduxStore.fetchSkillsReducer.map( (player, index) => this.checkPlayer(player, index)
                    )}  
                </ul>
            </>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PlayersToAdd);