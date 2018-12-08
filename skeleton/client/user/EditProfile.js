import React, {Component} from 'react'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {update} from './user-api.js'
import authHelper from '../auth/auth-helper'
import {Redirect} from 'react-router-dom'


const styles = theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing.unit * 5,
      paddingBottom: theme.spacing.unit * 2
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing.unit * 2,
      color: theme.palette.openTitle
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing.unit * 2
    }
  })

  class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {            
            name: '',
            password: '',
            email: '',
            redirectToProfile: false,
            error: '',
            userId: this.props.match.params.userId
        }
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    clickSubmit = () => {
        const jwt = authHelper.isAuthenticated()
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined
        }

        update(
            {userId: this.state.userId},
            {t: jwt.token}, 
            user
        ).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
                this.setState({error: '', redirectToProfile: true})
            }
        })        
    }

    render() {
        const {classes} = this.props
        if (this.state.redirectToProfile) {
            return (<Redirect to={'/user/' + this.state.userId} />)
        }
        return(
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography type="headline" component="h2" className={classes.title}>
                            Edit Profile
                        </Typography>
                        <TextField id="name" label="Name" className={classes.textField}
                            value={this.state.name} onChange={this.handleChange('name')}
                            margin="normal" /><br/>
                        <TextField id="email" label="Email" className={classes.textField}
                            type="email"
                            value={this.state.email} onChange={this.handleChange('email')}
                            margin="normal"
                        /><br/>
                        <TextField id="password" label="Password" className={classes.textField}
                            type="password"
                            value={this.state.password} onChange={this.handleChange('password')}
                            margin="normal"
                        /><br/>
                        {
                            this.state.error && (
                            <Typography component="p" color="error">
                                <Icon color="error" className={classes.error}>error</Icon>
                                {this.state.error}
                            </Typography>)
                        }
                    </CardContent>
                    <CardActions>
                        <Button color="primary" variant="raised" onClick={this.clickSubmit} className={classes.submit}>
                            Submit
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

EditProfile.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EditProfile)