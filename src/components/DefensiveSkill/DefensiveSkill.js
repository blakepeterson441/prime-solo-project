import React, {Component} from 'react';

class DefensiveSkill extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    console.log('defensiveSkill event.target.value', event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    

    return (
      <><h3>Defensive Skills {this.props.state}</h3>
      <div>
        <input type="radio" name="defensiveValue" value='1' defaultChecked
                    onChange={(event) => this.handleChange(event)} />1
        <input type="radio" name="defensiveValue" value='2'
                    onChange={(event) => this.handleChange(event)} />2
        <input type="radio" name="defensiveValue" value="3" 
                    onChange={(event) => this.handleChange(event)} />3
        <input type="radio" name="defensiveValue" value="4"
                    onChange={(event) => this.handleChange(event)} />4
        <input type="radio" name="defensiveValue" value="5" 
                    onChange={(event) => this.handleChange(event)} />5
        <input type="radio" name="defensiveValue" value="6"
                    onChange={(event) => this.handleChange(event)} />6
        <input type="radio" name="defensiveValue" value="7" 
                    onChange={(event) => this.handleChange(event)} />7
        <input type="radio" name="defensiveValue" value="8"
                    onChange={(event) => this.handleChange(event)} />8
        <input type="radio" name="defensiveValue" value="9" 
                    onChange={(event) => this.handleChange(event)} />9
        <input type="radio" name="defensiveValue" value="10"
                    onChange={(event) => this.handleChange(event)} />10
      </div>
      </>
    );
  }
}

export default DefensiveSkill;