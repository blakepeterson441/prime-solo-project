import React, {Component} from 'react';

class AggressionSkill extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    console.log('aggressionSkill event.target.value', event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    

    return (
      <><h3>Aggression Skills {this.props.state}</h3>
      <div>
        <input type="radio" name="aggressionValue" value='1' defaultChecked
                    onChange={(event) => this.handleChange(event)} />1
        <input type="radio" name="aggressionValue" value='2'
                    onChange={(event) => this.handleChange(event)} />2
        <input type="radio" name="aggressionValue" value="3" 
                    onChange={(event) => this.handleChange(event)} />3
        <input type="radio" name="aggressionValue" value="4"
                    onChange={(event) => this.handleChange(event)} />4
        <input type="radio" name="aggressionValue" value="5" 
                    onChange={(event) => this.handleChange(event)} />5
        <input type="radio" name="aggressionValue" value="6"
                    onChange={(event) => this.handleChange(event)} />6
        <input type="radio" name="aggressionValue" value="7" 
                    onChange={(event) => this.handleChange(event)} />7
        <input type="radio" name="aggressionValue" value="8"
                    onChange={(event) => this.handleChange(event)} />8
        <input type="radio" name="aggressionValue" value="9" 
                    onChange={(event) => this.handleChange(event)} />9
        <input type="radio" name="aggressionValue" value="10"
                    onChange={(event) => this.handleChange(event)} />10
      </div>
      </>
    );
  }
}

export default AggressionSkill;