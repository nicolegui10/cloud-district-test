import React, { Component } from 'react';
import { Avatar, Button, CssBaseline, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Typography, Paper } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import {withRouter} from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../common/utils/Firebase';
import {connect} from 'react-redux'
import {setCredentials} from './Login.actions'

import loginStyles from './Login.styles';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      error: null,
      redirectToReferrer: false 
    };
  }

  componentDidMount() {

  }

  handleLoginWithGoogle = event => {
    this.props.firebase
        .signInWithGoogle()
        .then(socialAuthUser => {
          console.log(socialAuthUser)
          const user = {
            email: socialAuthUser.user.email,
            name: socialAuthUser.user.displayName,
            photo: socialAuthUser.user.photoURL,
            token: socialAuthUser.credential.accessToken
          }
          this.props.setCredentials(user).then(() => {
            console.log('SET USER')
            this.redirectToReferrer()
          })
          
        })
        .catch(error => {
          console.log(error)
          this.setState({ error });
        });
  
      event.preventDefault();
  }

  redirectToReferrer = () => {
    const { from } = this.props.location.state || { from: { pathname: '/users' } };
    console.log(from.pathname);
    this.props.history.push(from.pathname);
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} onSubmit={this.handleLogin}>
            <Button
              fullWidth
              variant="contained"
              color="default"
              className={classes.submit}
              onClick={(e) => this.handleLoginWithGoogle(e)}
            >
              Login With Google
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  setCredentials
}

export default compose(withStyles(loginStyles), withRouter, withFirebase, connect(mapStateToProps, mapDispatchToProps))(Login);