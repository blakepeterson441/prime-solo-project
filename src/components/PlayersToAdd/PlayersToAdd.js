import React, {Component} from 'react';
import {connect} from 'react-redux';
import PlayerList from '../PlayerList/PlayerList';


class PlayersToAdd extends Component {

  render() {
    return (
        <>
            <ul> 
                {this.props.reduxStore.setSkillsReducer.map( (player, index) => 
                    <PlayerList player={player} key={index}/>
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