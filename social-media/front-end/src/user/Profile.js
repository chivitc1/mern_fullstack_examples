import React, { Component } from 'react'
import { read } from './user-api'
import auth from '../auth/auth-helper'


import { Card, CardActions, CardContent, Typography, TextField, Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Person from '@material-ui/icons/Person'

export class Profile extends Component {
    constructor(match) {
        super()
        this.state = { user: '', redirectToSignin: false }
        this.match = match
    }

    init = (userId) => {
        const credentials = auth.isAuthenticated()
        read({
            userId: userId
        }, { token: credentials.token }).then((data) => {
            if (data.error)
                this.setState({ redirectToSignin: true })
            else
                this.setState({ user: data })
        })
    }

    componentDidMount = () => {
        this.init(this.match.params.userId)
    }

    componentWillReceiveProps = (props) => {
        this.init(props.match.params.userId)
    }

    render() {
        const { classes } = this.props
        const redirectToSignin = this.state.redirectToSignin
        if (redirectToSignin) return <Redirect to='/signin' />
        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <Typography type="title" className={classes.title}>Profile</Typography>
                    <List dense>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar><Person/></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={this.state.user.name} secondary={this.state.user.email} />
                        </ListItem>
                        { 
                            auth.isAuthenticated().user && auth.isAuthenticated().user._id == this.state.user._id
                            (
                                <ListItemSecondaryAction>
                                    <Link to={"/user/edit/" + this.state.user._id}>
                                        <IconButton color="primary">
                                            <Edit />
                                        </IconButton>
                                    </Link>
                                    <DeleteUser userId={this.state.user._id} />
                                </ListItemSecondaryAction>
                            )
                        }
                        <Divider/>
                        <ListItem>
                            <ListItemText primary={"Joined: " + (new Date(this.state.user.createdAt)).toDateString()} />
                        </ListItem>
                    </List>
                </Paper>
            </div >
        )
    }
}

export default Profile
