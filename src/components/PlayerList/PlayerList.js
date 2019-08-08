import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {

    state = {
        selectButton: true,
    };

    render() {
        return (
            <>
                <li>
                    <div>
                        <h3>{this.props.username}</h3>
                        <p>{this.props.game}</p>
                        <p>{this.props.overall}</p>
                        <p>{this.props.offensive}</p>
                        <p>{this.props.defensive}</p>
                        <p>{this.props.aggression}</p>
                    </div>
                   <button onClick={this.addPlayer}>Add</button>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(PlayerList);