import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../home'
import Users from '../user/Users';
import Menu from './Menu';
import Signup from '../user/Signup';
import Signin from '../auth/Signin'

class MainRouter extends Component {
    render() {
        return (<div>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/users" component={Users} />
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
            </Switch>
        </div>)
    }
} 

export default MainRouter