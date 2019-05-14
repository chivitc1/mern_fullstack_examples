import { create } from './user-api';
import { Card, CardActions, CardContent, Typography, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing(2),
      color: theme.palette.openTitle
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    }
  })

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            email: '',
            statusMsgOpen: false,
            error: ''
      }
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
    }

    clickSubmit = () => {
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined
        }

        create(user).then(data => {
            if (data && data.error) {
                this.setState({ error: data.error })
            } else {
                this.setState({ error: '', statusMsgOpen: true })
            }
        })
    }
    render() {
        const { classes } = this.props
      return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>Sign up</Typography>
                    <TextField id="name" label="Name" className={classes.textField} value={this.state.name}
                        onChange={this.handleChange('name')} margin="normal" /><br/>
                    <TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email}
                        onChange={this.handleChange('email')} margin="normal" /><br/>
                    <TextField id="password" ktype="password" label="Password" className={classes.textField}
                        onChange={this.handleChange('password')} margin="normal" /><br/>
                        {
                            this.state.error && (<Typography component="p" color="error">
                                <Icon color="error" className={classes.error}>error</Icon>{this.state.error}                               
                            </Typography>)
                        }
                </CardContent>
                <CardActions>
                        <Button color="primary" variant="text" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
                </CardActions>
            </Card>

            <Dialog open={this.state.statusMsgOpen} disableBackdropClick={true}>
                <DialogTitle>New Account</DialogTitle>
                <DialogContent>
                    <DialogContentText>New account successfully created</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/signin">
                        <Button color="primary" autoFocus="autoFocus" variant="text">Signin</Button>
                    </Link>
                </DialogActions>
            </Dialog>
          
        </div>
      )
    }
  }
  
  Signup.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Signup)
  
  