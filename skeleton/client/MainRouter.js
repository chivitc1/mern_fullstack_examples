import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup';
import Signin from './auth/Signin';
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import EditProfile from './user/EditProfile'
import Menu from './core/Menu'

/**
 * As we develop more view components, we will update the MainRouter to add
routes for the new components inside the Switch component

The Switch component in React Router renders a route exclusively. In other words, it only
renders the first child that matches the requested route path. Whereas, without being nested in
a Switch, every Route component renders inclusively when there is a path match. For example, a
request at '/' also matches a route at '/contact'.
 */
class MainRouter extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
                    <Route exact path="/user/:userId" component={Profile} />
                </Switch>
            </div>
        )
    }
}

export default MainRouter