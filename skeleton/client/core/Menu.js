import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import Button from 'material-ui/Button'
import authHelper from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
    if (history.location.pathname == path) {
        return {color: '#ff4081'}
    } else
        return {color: '#ffffff'}
}

const Menu = withRouter(({history}) => (
    <AppBar position="static">
        <Toolbar>
            <Typography type="title" color="inherit">
                Learn React
            </Typography>
            <Link to="/">
                <IconButton aria-label="Home" style={isActive(history, "/")}><HomeIcon /></IconButton>
            </Link>
            <Link to="/users">
                <Button style={isActive(history, "/users")}>Users</Button>
            </Link>

            {
                !authHelper.isAuthenticated() && (<span>
                    <Link to="/signup">
                        <Button style={isActive(history, "/signup")}>Sign Up</Button>
                    </Link>
                    <Link to="/signin">
                        <Button style={isActive(history, "/signin")}>Sign In</Button>
                    </Link>
                </span>
                )
            }
            {
        authHelper.isAuthenticated() && <span>
          <Link to={"/user/" + authHelper.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/" + authHelper.isAuthenticated().user._id)}>My Profile</Button>
          </Link>
          <Button color="inherit" onClick={() => {
              authHelper.logout(() => history.push('/'))
            }}>Sign out</Button>
        </span>
      }
        </Toolbar>
    </AppBar>
))

export default Menu