import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './common/utils/PrivateRoute'
import Storage from './common/utils/Storage';
import { connect } from 'react-redux';
import {compose} from 'recompose'

import {logout} from './common/actions/actions'
import {setCredentials} from './auth/Login.actions'

import Login from './auth/Login'
import Users from './users/Users'

const styles = theme => ({
  app: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
});

class App extends Component {

  getCurrentAuthSession = () => {
    const currentUser = {...Storage.getObjectItem('AUTH_INFO')};
    return currentUser
  }
  

  render() {
    const { classes } = this.props;
    const currentUser = this.getCurrentAuthSession();

    return (
      <div className={classes.app}>
        <Switch>
          <Route exact path='/' render={_ => <Login />} />  
            <PrivateRoute component={Users} auth={currentUser}/> 
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  logout,
  setCredentials
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(App);