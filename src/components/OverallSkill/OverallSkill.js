import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class OverallSkill extends Component {
  state = {
    selectedValue: '1',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <><h3>Overall Skills</h3>
      <div>
        <Radio
          checked={this.state.selectedValue === '1'}
          onChange={this.handleChange}
          value="1"
          color="default"
          name="radio-button-demo"
          aria-label="A"
        />
        <Radio
          checked={this.state.selectedValue === '2'}
          onChange={this.handleChange}
          value="2"
          color="default"
          name="radio-button-demo"
          aria-label="B"
        />
        <Radio
          checked={this.state.selectedValue === '3'}
          onChange={this.handleChange}
          value="3"
          color="default"
          name="radio-button-demo"
          aria-label="C"
        />
        <Radio
          checked={this.state.selectedValue === '4'}
          onChange={this.handleChange}
          value="4"
          color="default"
          name="radio-button-demo"
          aria-label="D"
        />
        <Radio
          checked={this.state.selectedValue === '5'}
          onChange={this.handleChange}
          value="5"
          color="default"
          name="radio-button-demo"
          aria-label="E"
        />
        <Radio
          checked={this.state.selectedValue === '6'}
          onChange={this.handleChange}
          value="6"
          color="default"
          name="radio-button-demo"
          aria-label="F"
        />
        <Radio
          checked={this.state.selectedValue === '7'}
          onChange={this.handleChange}
          value="7"
          color="default"
          name="radio-button-demo"
          aria-label="G"
        />
        <Radio
          checked={this.state.selectedValue === '8'}
          onChange={this.handleChange}
          value="8"
          color="default"
          name="radio-button-demo"
          aria-label="H"
        />
        <Radio
          checked={this.state.selectedValue === '9'}
          onChange={this.handleChange}
          value="9"
          color="default"
          name="radio-button-demo"
          aria-label="I"
        />
        <Radio
          checked={this.state.selectedValue === '10'}
          onChange={this.handleChange}
          value="10"
          color="default"
          name="radio-button-demo"
          aria-label="J"
        />
      </div>
      </>
    );
  }
}

OverallSkill.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OverallSkill);