import React, {Component} from 'react';
import {connect} from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class DropDownGames extends Component {
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

  render() {
    return (
      <div>
        <h1>Search for Players</h1>
        <button 
          style={{
            fontSize: '2rem',
            height: 50,
            width: 240
          }}
          onClick={this.showMenu}
        >
          Select Game
        </button>
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button
                  style={{
                    height: 240,
                    width: 160,
                    backgroundImage: `url(https://microplay.com/media/catalog/product/cache/f3bf28a13af81a177e7f29529d01f858/6/2/6251_cover_1.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></button>
                <button
                  style={{
                    height: 240,
                    width: 160,
                    backgroundImage: `url(https://images.g2a.com/newlayout/323x433/1x1x0/e1f2e4cc3323/5b4e17bbae653a58bd4ef8c7)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}></button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
}
}

export default connect()(DropDownGames);