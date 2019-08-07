import React, {Component} from 'react';
import {connect} from 'react-redux';
import './SearchPage.css';
import AllSkill from '../AllSkill/AllSkill';
import DropDownGames from '../DropDownGames/DropDownGames';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class SearchPage extends Component {
  

  render() {
    return (
      <>
      <DropDownGames />
      <AllSkill />
      </>
    );
  }
}

export default connect()(SearchPage);
