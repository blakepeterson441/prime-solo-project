import React, {Component} from 'react';
import { connect } from 'react-redux';
import './ProfilePage.css';
//import ProfileUsername from '../ProfileUsername/ProfileUsername';


class ProfilePage extends Component {

  state = {
    addSkill: {
      game: '',
      overall: '',
      offensive: '',
      defensive: '',
      aggression: '',
    }
  }

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
      addSkill:{
      ...this.state.addSkill,
      [propertyName]: event.target.value
      }
    })
  }

  handleSubmit = () => {
    console.log('clicked handleSubmit', this.state.addSkill);
    let data = {
      addSkill: this.state.addSkill,
      user: this.props.reduxStore.user.id
    }
    this.props.dispatch({
      type: 'ADD_SKILLS',
      payload: data
    })
  }

  componentDidMount = () => {
    console.log('componentDidMount', this.props.reduxStore.user);
    this.props.dispatch({
      type: 'GET_USERNAME',
      payload: this.props.reduxStore.user.username
    })
  }

  render() {
    
    return (
      <><div>
                <h1>{this.props.reduxStore.user.username}'s Profile</h1>
        <h2 className="skills">Skills</h2>
        <button className="select" 
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
                <button value='1' default onClick={(event) => this.handleChangeFor('game', event)}
                  style={{
                    height: 240,
                    width: 160,
                    backgroundImage: `url(https://microplay.com/media/catalog/product/cache/f3bf28a13af81a177e7f29529d01f858/6/2/6251_cover_1.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></button>
                <button value='2' onClick={(event) => this.handleChangeFor('game', event)}
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
      
      <h3 className="skills">Overall Skills</h3>
      <div className="skills">
        1<input type="radio" name="overallValue" value='1' defaultChecked
                    onChange={(event) => this.handleChangeFor('overall', event)} />
        2<input type="radio" name="overallValue" value='2'
                    onChange={(event) => this.handleChangeFor('overall', event)} />
        3<input type="radio" name="overallValue" value="3" 
                    onChange={(event) => this.handleChangeFor('overall', event)} />
        4<input type="radio" name="overallValue" value="4"
                    onChange={(event) => this.handleChangeFor('overall', event)} />
        5<input type="radio" name="overallValue" value="5" 
                    onChange={(event) => this.handleChangeFor('overall', event)} />
        6<input type="radio" name="overallValue" value="6"
                    onChange={(event) => this.handleChangeFor('overall', event)} />
        7<input type="radio" name="overallValue" value="7" 
                    onChange={(event) => this.handleChangeFor('overall', event)} />
        8<input type="radio" name="overallValue" value="8"
                    onChange={(event) => this.handleChangeFor('overall', event)} />
        9<input type="radio" name="overallValue" value="9" 
                    onChange={(event) => this.handleChangeFor('overall', event)} />
        10<input type="radio" name="overallValue" value="10"
                    onChange={(event) => this.handleChangeFor('overall', event)} />
      </div>
      <h3 className="skills">Offensive Skills {this.props.state}</h3>
      <div className="skills">
        1<input type="radio" name="offensiveValue" value='1' defaultChecked
                    onChange={(event) => this.handleChangeFor('offensive', event)} />
        2<input type="radio" name="offensiveValue" value='2'
                    onChange={(event) => this.handleChangeFor('offensive', event)} />
        3<input type="radio" name="offensiveValue" value="3" 
                    onChange={(event) => this.handleChangeFor('offensive', event)} />
        4<input type="radio" name="offensiveValue" value="4"
                    onChange={(event) => this.handleChangeFor('offensive', event)} />
        5<input type="radio" name="offensiveValue" value="5" 
                    onChange={(event) => this.handleChangeFor('offensive', event)} />
        6<input type="radio" name="offensiveValue" value="6"
                    onChange={(event) => this.handleChangeFor('offensive', event)} />
        7<input type="radio" name="offensiveValue" value="7" 
                    onChange={(event) => this.handleChangeFor('offensive', event)} />
        8<input type="radio" name="offensiveValue" value="8"
                    onChange={(event) => this.handleChangeFor('offensive', event)} />
        9<input type="radio" name="offensiveValue" value="9" 
                    onChange={(event) => this.handleChangeFor('offensive', event)} />
        10<input type="radio" name="offensiveValue" value="10"
                    onChange={(event) => this.handleChangeFor('offensive', event)} />
      </div>
      <h3 className="skills">Defensive Skills {this.props.state}</h3>
      <div className="skills">
        1<input type="radio" name="defensiveValue" value='1' defaultChecked
                    onChange={(event) => this.handleChangeFor('defensive', event)} />
        2<input type="radio" name="defensiveValue" value='2'
                    onChange={(event) => this.handleChangeFor('defensive', event)} />
        3<input type="radio" name="defensiveValue" value="3" 
                    onChange={(event) => this.handleChangeFor('defensive', event)} />
        4<input type="radio" name="defensiveValue" value="4"
                    onChange={(event) => this.handleChangeFor('defensive', event)} />
        5<input type="radio" name="defensiveValue" value="5" 
                    onChange={(event) => this.handleChangeFor('defensive', event)} />
        6<input type="radio" name="defensiveValue" value="6"
                    onChange={(event) => this.handleChangeFor('defensive', event)} />
        7<input type="radio" name="defensiveValue" value="7" 
                    onChange={(event) => this.handleChangeFor('defensive', event)} />
        8<input type="radio" name="defensiveValue" value="8"
                    onChange={(event) => this.handleChangeFor('defensive', event)} />
        9<input type="radio" name="defensiveValue" value="9" 
                    onChange={(event) => this.handleChangeFor('defensive', event)} />
        10<input type="radio" name="defensiveValue" value="10"
                    onChange={(event) => this.handleChangeFor('defensive', event)} />
      </div>
      <h3 className="skills">Aggression Skills {this.props.state}</h3>
      <div className="skills">
        1<input type="radio" name="aggressionValue" value='1' defaultChecked
                    onChange={(event) => this.handleChangeFor('aggression', event)} />
        2<input type="radio" name="aggressionValue" value='2'
                    onChange={(event) => this.handleChangeFor('aggression', event)} />
        3<input type="radio" name="aggressionValue" value="3" 
                    onChange={(event) => this.handleChangeFor('aggression', event)} />
        4<input type="radio" name="aggressionValue" value="4"
                    onChange={(event) => this.handleChangeFor('aggression', event)} />
        5<input type="radio" name="aggressionValue" value="5" 
                    onChange={(event) => this.handleChangeFor('aggression', event)} />
        6<input type="radio" name="aggressionValue" value="6"
                    onChange={(event) => this.handleChangeFor('aggression', event)} />
        7<input type="radio" name="aggressionValue" value="7" 
                    onChange={(event) => this.handleChangeFor('aggression', event)} />
        8<input type="radio" name="aggressionValue" value="8"
                    onChange={(event) => this.handleChangeFor('aggression', event)} />
        9<input type="radio" name="aggressionValue" value="9"
                    onChange={(event) => this.handleChangeFor('aggression', event)} />
        10<input type="radio" name="aggressionValue" value="10"
                    onChange={(event) => this.handleChangeFor('aggression', event)} />
      </div>

      <button className="select" onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}


const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(ProfilePage);

