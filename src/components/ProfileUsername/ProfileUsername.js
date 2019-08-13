import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProfileUsername extends Component {

    render() {
        return (
            <>
                <li>
                    <div>
                        <p><b>{this.props.friend.username}'s Profile</b></p>
                    </div>
                </li>
            </>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(ProfileUsername);