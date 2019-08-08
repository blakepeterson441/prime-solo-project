import React, {Component} from 'react';
import {connect} from 'react-redux';
import './SearchPage.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class SearchPage extends Component {

  state = {
    playerSkill: {
      overall: '',
      offensive: '',
      defensive: '',
      aggression: '',
      game: '',
  }
  };

  constructor() {
    super();

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
  }


  showMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: true,
    });
  }

  handleChangeFor = (propertyName, event) => {
    console.log('handleChangeFor event.target.value', event.target.value);
    
    this.setState({
      playerSkill:{
      ...this.state.playerSkill,
      [propertyName]: event.target.value
      }
    })
  }

  handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.dispatch({
      type: 'SEARCH_SKILLS',
      payload: this.state.playerSkill
    })
    this.props.history.push('/players');
  }

  render() {
    
    return (
      <><div>
        <h1>Search for Players</h1>
        <button 
          style={{
            fontSize: '2rem',
            height: 50,
            width: 240
          }}
          onClick={this.showMenu}>
          Select Game </button>
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button value='Rocket League' onClick={(event) => this.handleChangeFor('game', event)}
                  style={{
                    height: 240,
                    width: 160,
                    backgroundImage: `url(https://microplay.com/media/catalog/product/cache/f3bf28a13af81a177e7f29529d01f858/6/2/6251_cover_1.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></button>
                <button value='NBA' onClick={(event) => this.handleChangeFor('game', event)}
                  style={{
                    height: 240,
                    width: 160,
                    backgroundImage: `url(https://images.g2a.com/newlayout/323x433/1x1x0/e1f2e4cc3323/5b4e17bbae653a58bd4ef8c7)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></button>
                <br />
                {JSON.stringify(this.state.game)}
              </div>
            )
            : (
              null
            )
        }
      </div>
      
      <h3>Overall Skills</h3>
      {/* {JSON.stringify(this.state.playerSkill.overall)} */}
      <div>
        <input type="radio" name="overallValue" value='1' defaultChecked
                    onChange={(event) => this.handleChangeFor('overall', event)} />1
        <input type="radio" name="overallValue" value='2'
                    onChange={(event) => this.handleChangeFor('overall', event)} />2
        <input type="radio" name="overallValue" value="3" 
                    onChange={(event) => this.handleChangeFor('overall', event)} />3
        <input type="radio" name="overallValue" value="4"
                    onChange={(event) => this.handleChangeFor('overall', event)} />4
        <input type="radio" name="overallValue" value="5" 
                    onChange={(event) => this.handleChangeFor('overall', event)} />5
        <input type="radio" name="overallValue" value="6"
                    onChange={(event) => this.handleChangeFor('overall', event)} />6
        <input type="radio" name="overallValue" value="7" 
                    onChange={(event) => this.handleChangeFor('overall', event)} />7
        <input type="radio" name="overallValue" value="8"
                    onChange={(event) => this.handleChangeFor('overall', event)} />8
        <input type="radio" name="overallValue" value="9" 
                    onChange={(event) => this.handleChangeFor('overall', event)} />9
        <input type="radio" name="overallValue" value="10"
                    onChange={(event) => this.handleChangeFor('overall', event)} />10
      </div>
      <h3>Offensive Skills {this.props.state}</h3>
      {JSON.stringify(this.state.offensive)}
      <div>
        <input type="radio" name="offensiveValue" value='1' defaultChecked
                    onChange={(event) => this.handleChangeFor('offensive', event)} />1
        <input type="radio" name="offensiveValue" value='2'
                    onChange={(event) => this.handleChangeFor('offensive', event)} />2
        <input type="radio" name="offensiveValue" value="3" 
                    onChange={(event) => this.handleChangeFor('offensive', event)} />3
        <input type="radio" name="offensiveValue" value="4"
                    onChange={(event) => this.handleChangeFor('offensive', event)} />4
        <input type="radio" name="offensiveValue" value="5" 
                    onChange={(event) => this.handleChangeFor('offensive', event)} />5
        <input type="radio" name="offensiveValue" value="6"
                    onChange={(event) => this.handleChangeFor('offensive', event)} />6
        <input type="radio" name="offensiveValue" value="7" 
                    onChange={(event) => this.handleChangeFor('offensive', event)} />7
        <input type="radio" name="offensiveValue" value="8"
                    onChange={(event) => this.handleChangeFor('offensive', event)} />8
        <input type="radio" name="offensiveValue" value="9" 
                    onChange={(event) => this.handleChangeFor('offensive', event)} />9
        <input type="radio" name="offensiveValue" value="10"
                    onChange={(event) => this.handleChangeFor('offensive', event)} />10
      </div>
      <h3>Defensive Skills {this.props.state}</h3>
      {JSON.stringify(this.state.defensive)}
      <div>
        <input type="radio" name="defensiveValue" value='1' defaultChecked
                    onChange={(event) => this.handleChangeFor('defensive', event)} />1
        <input type="radio" name="defensiveValue" value='2'
                    onChange={(event) => this.handleChangeFor('defensive', event)} />2
        <input type="radio" name="defensiveValue" value="3" 
                    onChange={(event) => this.handleChangeFor('defensive', event)} />3
        <input type="radio" name="defensiveValue" value="4"
                    onChange={(event) => this.handleChangeFor('defensive', event)} />4
        <input type="radio" name="defensiveValue" value="5" 
                    onChange={(event) => this.handleChangeFor('defensive', event)} />5
        <input type="radio" name="defensiveValue" value="6"
                    onChange={(event) => this.handleChangeFor('defensive', event)} />6
        <input type="radio" name="defensiveValue" value="7" 
                    onChange={(event) => this.handleChangeFor('defensive', event)} />7
        <input type="radio" name="defensiveValue" value="8"
                    onChange={(event) => this.handleChangeFor('defensive', event)} />8
        <input type="radio" name="defensiveValue" value="9" 
                    onChange={(event) => this.handleChangeFor('defensive', event)} />9
        <input type="radio" name="defensiveValue" value="10"
                    onChange={(event) => this.handleChangeFor('defensive', event)} />10
      </div>
      <h3>Aggression Skills {this.props.state}</h3>
      {JSON.stringify(this.state.aggression)}
      <div>
        <input type="radio" name="aggressionValue" value='1' defaultChecked
                    onChange={(event) => this.handleChangeFor('aggression', event)} />1
        <input type="radio" name="aggressionValue" value='2'
                    onChange={(event) => this.handleChangeFor('aggression', event)} />2
        <input type="radio" name="aggressionValue" value="3" 
                    onChange={(event) => this.handleChangeFor('aggression', event)} />3
        <input type="radio" name="aggressionValue" value="4"
                    onChange={(event) => this.handleChangeFor('aggression', event)} />4
        <input type="radio" name="aggressionValue" value="5" 
                    onChange={(event) => this.handleChangeFor('aggression', event)} />5
        <input type="radio" name="aggressionValue" value="6"
                    onChange={(event) => this.handleChangeFor('aggression', event)} />6
        <input type="radio" name="aggressionValue" value="7" 
                    onChange={(event) => this.handleChangeFor('aggression', event)} />7
        <input type="radio" name="aggressionValue" value="8"
                    onChange={(event) => this.handleChangeFor('aggression', event)} />8
        <input type="radio" name="aggressionValue" value="9" 
                    onChange={(event) => this.handleChangeFor('aggression', event)} />9
        <input type="radio" name="aggressionValue" value="10"
                    onChange={(event) => this.handleChangeFor('aggression', event)} />10
      </div>

      <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(SearchPage);
