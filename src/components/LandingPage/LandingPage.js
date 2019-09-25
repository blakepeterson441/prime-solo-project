import React, { Component } from 'react';
import { connect } from 'react-redux';

class LandingPage extends Component {

    render(){
        return (
            <>
                <h1>Welcome to Player 2, {this.props.reduxStore.user.username}!</h1>
                <p>On Player 2, you can find people to play your favorite games with. This project was thought of and created by me, Blake Peterson.</p>
            </>
        )
    }
}



const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(LandingPage);