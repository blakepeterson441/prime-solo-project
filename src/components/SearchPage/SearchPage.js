import React, {Component} from 'react';
import {connect} from 'react-redux';
import './SearchPage.css';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


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
  input: {
    margin: 'auto',
    width: '37%',
  },
  skillHeader: {
    margin: 'auto',
    width: '37%',
    paddingTop: '2%'
  }
});

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
        <h1>Search for Players</h1>
        <button className="select"
          style={{
            fontSize: '2rem',
            height: 50,
            width: 240,
          }}
          onClick={this.showMenu}>
          Select Game </button>
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button value='Rocket League' default onClick={(event) => this.handleChangeFor('game', event)}
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
              </div>
            )
            : (
              null
            )
        }
      </div>
      
      <h3 className={classes.skillHeader}>Overall Skills</h3>
      <div className={classes.input}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button name="overallValue" value='1' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>1</Button>
                  <Button name="overallValue" value='2' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>2</Button>
                  <Button name="overallValue" value='3' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>3</Button>
                  <Button name="overallValue" value='4' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>4</Button>
                  <Button name="overallValue" value='5' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>5</Button>
                  <Button name="overallValue" value='6' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>6</Button>
                  <Button name="overallValue" value='7' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>7</Button>
                  <Button name="overallValue" value='8' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>8</Button>
                  <Button name="overallValue" value='9' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>9</Button>
                  <Button name="overallValue" value='10' defaultChecked
                    onClick={(event) => this.handleChangeFor('overall', event)}>10</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <h3 className={classes.skillHeader}>Offensive Skills {this.props.state}</h3>
      <div className={classes.input}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button name="offensiveValue" value='1' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>1</Button>
                  <Button name="offensiveValue" value='2' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>2</Button>
                  <Button name="offensiveValue" value='3' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>3</Button>
                  <Button name="offensiveValue" value='4' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>4</Button>
                  <Button name="offensiveValue" value='5' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>5</Button>
                  <Button name="offensiveValue" value='6' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>6</Button>
                  <Button name="offensiveValue" value='7' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>7</Button>
                  <Button name="offensiveValue" value='8' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>8</Button>
                  <Button name="offensiveValue" value='9' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>9</Button>
                  <Button name="offensiveValue" value='10' defaultChecked
                    onClick={(event) => this.handleChangeFor('offensive', event)}>10</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <h3 className={classes.skillHeader}>Defensive Skills {this.props.state}</h3>
      <div className={classes.input}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button name="defensiveValue" value='1' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>1</Button>
                  <Button name="defensiveValue" value='2' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>2</Button>
                  <Button name="defensiveValue" value='3' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>3</Button>
                  <Button name="defensiveValue" value='4' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>4</Button>
                  <Button name="defensiveValue" value='5' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>5</Button>
                  <Button name="defensiveValue" value='6' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>6</Button>
                  <Button name="defensiveValue" value='7' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>7</Button>
                  <Button name="defensiveValue" value='8' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>8</Button>
                  <Button name="defensiveValue" value='9' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>9</Button>
                  <Button name="defensiveValue" value='10' defaultChecked
                    onClick={(event) => this.handleChangeFor('defensive', event)}>10</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <h3 className={classes.skillHeader}>Aggression Skills {this.props.state}</h3>
      <div className={classes.input}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button name="aggressionValue" value='1' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>1</Button>
                  <Button name="aggressionValue" value='2' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>2</Button>
                  <Button name="aggressionValue" value='3' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>3</Button>
                  <Button name="aggressionValue" value='4' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>4</Button>
                  <Button name="aggressionValue" value='5' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>5</Button>
                  <Button name="aggressionValue" value='6' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>6</Button>
                  <Button name="aggressionValue" value='7' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>7</Button>
                  <Button name="aggressionValue" value='8' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>8</Button>
                  <Button name="aggressionValue" value='9' defaultChecked
                    onClick={(event) => this.handleChangeFor('aggression', event)}>9</Button>
                  <Button name="aggressionValue" value='10' defaultChecked
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
