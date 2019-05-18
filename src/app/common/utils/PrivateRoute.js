import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Storage from './Storage';

const PrivateRoute = ({ component: Component, props, ...rest }) => {
  return (
    <Route render={(props) => (
        Storage.getObjectItem('AUTH_INFO')
        ? <Component {...props} {...rest} />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
    )} {...rest} /> 
  )
};




export default PrivateRoute;