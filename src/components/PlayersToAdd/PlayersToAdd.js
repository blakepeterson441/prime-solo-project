import React, {Component} from 'react';
import {connect} from 'react-redux';
import PlayerList from '../PlayerList/PlayerList';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class PlayersToAdd extends Component {

  componentDidMount = () => {
      console.log('componentDidMount');
      this.props.dispatch({
          type: 'SEARCH_PLAYERS',
          payload: this.state
      })
  }

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