import React, {Component} from 'react';
import {connect} from 'react-redux';
import './SearchPage.css';
import OverallSkill from '../OverallSkill/OverallSkill';
import OffensiveSkill from '../OffensiveSkill/OffensiveSkill';
import DefensiveSkill from '../DefensiveSkill/DefensiveSkill';
import AggressionSkill from '../AggressionSkill/AggressionSkill';
import DropDownGames from '../DropDownGames/DropDownGames';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class SearchPage extends Component {

  handleSubmit = (event) => {
       this.props.dispatch({
         type: 'FETCH_SKILLS'
       })
    }

  render() {
    return (
      <>
      <DropDownGames />
      <OverallSkill />
      <OffensiveSkill />
      <DefensiveSkill />
      <AggressionSkill />
      <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}

export default connect()(SearchPage);
