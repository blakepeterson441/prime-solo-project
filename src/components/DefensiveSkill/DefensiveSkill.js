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

class DefensiveSkill extends Component {
  state = {
    selectedValue: 'a',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <><h3>Defensive Skills</h3>
      <div>
        <Radio
          checked={this.state.selectedValue === 'a'}
          onChange={this.handleChange}
          value="a"
          color="default"
          name="radio-button-demo"
          aria-label="A"
        />
        <Radio
          checked={this.state.selectedValue === 'b'}
          onChange={this.handleChange}
          value="b"
          color="default"
          name="radio-button-demo"
          aria-label="B"
        />
        <Radio
          checked={this.state.selectedValue === 'c'}
          onChange={this.handleChange}
          value="c"
          color="default"
          name="radio-button-demo"
          aria-label="C"
        />
        <Radio
          checked={this.state.selectedValue === 'd'}
          onChange={this.handleChange}
          value="d"
          color="default"
          name="radio-button-demo"
          aria-label="D"
        />
        <Radio
          checked={this.state.selectedValue === 'e'}
          onChange={this.handleChange}
          value="e"
          color="default"
          name="radio-button-demo"
          aria-label="E"
        />
        <Radio
          checked={this.state.selectedValue === 'f'}
          onChange={this.handleChange}
          value="f"
          color="default"
          name="radio-button-demo"
          aria-label="F"
        />
        <Radio
          checked={this.state.selectedValue === 'g'}
          onChange={this.handleChange}
          value="g"
          color="default"
          name="radio-button-demo"
          aria-label="G"
        />
        <Radio
          checked={this.state.selectedValue === 'h'}
          onChange={this.handleChange}
          value="h"
          color="default"
          name="radio-button-demo"
          aria-label="H"
        />
        <Radio
          checked={this.state.selectedValue === 'i'}
          onChange={this.handleChange}
          value="i"
          color="default"
          name="radio-button-demo"
          aria-label="I"
        />
        <Radio
          checked={this.state.selectedValue === 'j'}
          onChange={this.handleChange}
          value="j"
          color="default"
          name="radio-button-demo"
          aria-label="J"
        />
      </div>
      </>
    );
  }
}

DefensiveSkill.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefensiveSkill);