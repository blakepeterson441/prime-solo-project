import React, {Component} from 'react';
import {connect} from 'react-redux';
import './SearchPage.css';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';


const styles = theme => ({
  button: {
    margin: 'auto',
    color: '#0B3948',
    paddingRight: '0%',
    paddingLeft: '0%',
    display: 'inline-block',
  },
  header: {
    margin: 'auto',
    width: '30%'
  },
  numInput: {
    margin: 'auto',
    width: '37%',
  },
  skillHeader: {
    margin: 'auto',
    width: '37%',
    paddingTop: '2%',
    color: '#0B3948',
  },
  numBtn: {
    color: '#0B3948',
  },
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    width: '15%',
    height: '10%'
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    transition: theme.transitions.create(['border-color', 'box-shadow']), fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  margin: {
    width: '100%'
  }
});

class SearchPage extends Component {

  state = {
    playerSkill: {
      overall: 1,
      offensive: 1,
      defensive: 1,
      aggression: 1,
      game: 1,
    }
  };

  handleChangeFor = (propertyName, event) => {
    console.log('handleChangeFor event.target.value', event.currentTarget.value);
    this.setState({
      playerSkill:{
      ...this.state.playerSkill,
      [propertyName]: event.currentTarget.value
      }
    })
  }

  handleSubmit = () => {
    console.log('clicked handleSubmit', this.state.playerSkill);
    this.props.dispatch({
      type: 'SEARCH_SKILLS',
      payload: this.state.playerSkill
    })
    this.props.history.push('/players');
  }

  render() {
    const { classes } = this.props;
    return (
      <><div>
        <h1 className={classes.header}>Search for Players</h1>
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="age-customized-native-simple">Select Game</InputLabel>
            <NativeSelect
              onChange={(event) => this.handleChangeFor('game', event)}
            >
              <option value="" />
              <option value={1}>Rocket League</option>
              <option value={2}>NBA 2K20</option>
            </NativeSelect>
          </FormControl>
        </form>
      </div>
      <h3 className={classes.skillHeader}>Overall Skills</h3>
      <div className={classes.numInput}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button className={classes.numBtn} name="overallValue" value='1' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>1</Button>
                  <Button className={classes.numBtn} name="overallValue" value='2' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>2</Button>
                  <Button className={classes.numBtn} name="overallValue" value='3' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>3</Button>
                  <Button className={classes.numBtn} name="overallValue" value='4' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>4</Button>
                  <Button className={classes.numBtn} name="overallValue" value='5' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>5</Button>
                  <Button className={classes.numBtn} name="overallValue" value='6' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>6</Button>
                  <Button className={classes.numBtn} name="overallValue" value='7' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>7</Button>
                  <Button className={classes.numBtn} name="overallValue" value='8' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>8</Button>
                  <Button className={classes.numBtn} name="overallValue" value='9' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>9</Button>
                  <Button className={classes.numBtn} name="overallValue" value='10' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>10</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <h3 className={classes.skillHeader}>Offensive Skills {this.props.state}</h3>
      <div className={classes.numInput}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button className={classes.numBtn} name="offensiveValue" value='1' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>1</Button>
                  <Button className={classes.numBtn} name="offensiveValue" value='2' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>2</Button>
                  <Button className={classes.numBtn} name="offensiveValue" value='3' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>3</Button>
                  <Button className={classes.numBtn} name="offensiveValue" value='4' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>4</Button>
                  <Button className={classes.numBtn} name="offensiveValue" value='5' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>5</Button>
                  <Button className={classes.numBtn} name="offensiveValue" value='6' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>6</Button>
                  <Button className={classes.numBtn} name="offensiveValue" value='7' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>7</Button>
                  <Button className={classes.numBtn} name="offensiveValue" value='8' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>8</Button>
                  <Button className={classes.numBtn} name="offensiveValue" value='9' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>9</Button>
                  <Button className={classes.numBtn} name="offensiveValue" value='10' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>10</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <h3 className={classes.skillHeader}>Defensive Skills {this.props.state}</h3>
      <div className={classes.numInput}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button className={classes.numBtn} name="defensiveValue" value='1' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>1</Button>
                  <Button className={classes.numBtn} name="defensiveValue" value='2' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>2</Button>
                  <Button className={classes.numBtn} name="defensiveValue" value='3' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>3</Button>
                  <Button className={classes.numBtn} name="defensiveValue" value='4' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>4</Button>
                  <Button className={classes.numBtn} name="defensiveValue" value='5' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>5</Button>
                  <Button className={classes.numBtn} name="defensiveValue" value='6' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>6</Button>
                  <Button className={classes.numBtn} name="defensiveValue" value='7' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>7</Button>
                  <Button className={classes.numBtn} name="defensiveValue" value='8' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>8</Button>
                  <Button className={classes.numBtn} name="defensiveValue" value='9' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>9</Button>
                  <Button className={classes.numBtn} name="defensiveValue" value='10' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>10</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <h3 className={classes.skillHeader}>Aggression Skills {this.props.state}</h3>
      <div className={classes.numInput}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button className={classes.numBtn} name="aggressionValue" value='1' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>1</Button>
                  <Button className={classes.numBtn} name="aggressionValue" value='2' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>2</Button>
                  <Button className={classes.numBtn} name="aggressionValue" value='3' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>3</Button>
                  <Button className={classes.numBtn} name="aggressionValue" value='4' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>4</Button>
                  <Button className={classes.numBtn} name="aggressionValue" value='5' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>5</Button>
                  <Button className={classes.numBtn} name="aggressionValue" value='6' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>6</Button>
                  <Button className={classes.numBtn} name="aggressionValue" value='7' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>7</Button>
                  <Button className={classes.numBtn} name="aggressionValue" value='8' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>8</Button>
                  <Button className={classes.numBtn} name="aggressionValue" value='9' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>9</Button>
                  <Button className={classes.numBtn} name="aggressionValue" value='10' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>10</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Button variant="outlined" className={classes.button} onClick={this.handleSubmit}>Search</Button>
      </>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default withStyles(styles)(connect(mapStateToProps)(SearchPage));
