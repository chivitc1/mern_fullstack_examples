import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { CardContent, CardMedia, Card } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import homeImg from './../assets/images/home.jpg'

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5)
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
})

class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <Typography type="headline" component="h2" className={classes.title}>
          Home Page
          </Typography>
        <CardMedia className={classes.media} image={homeImg} title="Unicorn Shells" />
        <CardContent>
          <Typography type="body1" component="p">
            Welcome to the MERN Skeleton home page.
            </Typography>
        </CardContent>
      </Card>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)