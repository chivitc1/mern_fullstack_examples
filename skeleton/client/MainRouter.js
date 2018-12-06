import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'

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
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}

export default MainRouter