import React, { Component } from 'react'
import { list } from './user-api';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { List, ListItem, Link, Avatar, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import Person from '@material-ui/icons/Person'
import ArrowForward from '@material-ui/icons/ArrowForward'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/styles'

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: theme.spacing(1),
        margin: theme.spacing(5)
    }),
    title: {
        margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    }
})

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = { users: [] }
    }

    componentDidMount() {
        list().then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                this.setState({ users: data })
            }
        })
    }
    render() {
        const { classes } = this.props
        const {users} = this.state
        return (
            <Paper className={classes.root} elevation={4}>
                <Typography type="title" className={classes.title}>All users</Typography>
                <List dense>
                    {
                        users && users.map((item, i) => {
                        return <Link to={`/user/${item._id}`} key={i}>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Person />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.name} />
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <ArrowForward />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </Link>
                    })
                    }
                </List>
            </Paper>
        )
    }
}

Users.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Users)