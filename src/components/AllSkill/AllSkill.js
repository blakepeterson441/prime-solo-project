import React, {Component} from 'react';
import {connect} from 'react-redux';

class AllSkill extends Component {
  state = {
    overall: '',
    offensive: '',
    defensive: '',
    aggression: ''
  };

  handleChangeFor = (propertyName, event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.dispatch({
      type: 'SEARCH_SKILLS',
      payload: this.state
    })
  }

  render() {
    
    return (
      <><h3>Overall Skills {this.props.state}</h3>
      {JSON.stringify(this.state.overall)}
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

export default connect()(AllSkill);