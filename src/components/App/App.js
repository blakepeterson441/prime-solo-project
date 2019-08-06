import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AdminPage from '../AdminPage/AdminPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import SearchPage from '../SearchPage/SearchPage';
import EditPage from '../EditPage/EditPage';
import FriendsPage from '../FriendsPage/FriendsPage';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/profile */}
            <Redirect exact from="/" to="/profile" />
            {/* Visiting localhost:3000/admin will show the admin page.
            This is a route anyone can see, no login necessary */}
            <ProtectedRoute
              exact
              path="/admin"
              component={AdminPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/profile will show the ProfilePage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/profile */}
            <ProtectedRoute
              exact
              path="/profile"
              component={ProfilePage}
            />

            <ProtectedRoute
              exact
              path="/edit"
              component={EditPage}
            />

            <ProtectedRoute
              exact
              path="/friends"
              component={FriendsPage}
            />
            
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the search page instead. */}
            <ProtectedRoute
              exact
              path="/search"
              component={SearchPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
