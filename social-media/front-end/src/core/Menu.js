import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button"
import HomeIcon from '@material-ui/icons/Home'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
    if (history.location.pathname == path) {
        return { color: '#ff4081' }
    } else
        return { color: '#ffffff' }
}

const Menu = withRouter(({ history }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography type="title" color="inherit">SocialMedia</Typography>
            <Link to="/">
                <IconButton aria-label="Home" style={isActive(history, "/")}><HomeIcon /></IconButton>
            </Link>
            <Link to="/users">
                <Button style={isActive(history, "/users")}>Users</Button>
            </Link>
            <Link to="/signup">
                <Button style={isActive(history, "/signup")}>Sign Up</Button>
            </Link>
            <Link to="/signin">
                <Button style={isActive(history, "/signin")}>Sign In</Button>
            </Link>
        </Toolbar>
    </AppBar>
))

export default Menu
