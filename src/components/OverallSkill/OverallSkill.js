import React, {Component} from 'react';

class OverallSkill extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    console.log('overallSkill event.target.value', event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    

    return (
      <><h3>Overall Skills {this.props.state}</h3>
      <div>
        <input type="radio" name="overallValue" value='1' defaultChecked
                    onChange={(event) => this.handleChange(event)} />1
        <input type="radio" name="overallValue" value='2'
                    onChange={(event) => this.handleChange(event)} />2
        <input type="radio" name="overallValue" value="3" 
                    onChange={(event) => this.handleChange(event)} />3
        <input type="radio" name="overallValue" value="4"
                    onChange={(event) => this.handleChange(event)} />4
        <input type="radio" name="overallValue" value="5" 
                    onChange={(event) => this.handleChange(event)} />5
        <input type="radio" name="overallValue" value="6"
                    onChange={(event) => this.handleChange(event)} />6
        <input type="radio" name="overallValue" value="7" 
                    onChange={(event) => this.handleChange(event)} />7
        <input type="radio" name="overallValue" value="8"
                    onChange={(event) => this.handleChange(event)} />8
        <input type="radio" name="overallValue" value="9" 
                    onChange={(event) => this.handleChange(event)} />9
        <input type="radio" name="overallValue" value="10"
                    onChange={(event) => this.handleChange(event)} />10
      </div>
      </>
    );
  }
}

export default OverallSkill;