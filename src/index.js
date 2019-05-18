import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import App from './app/App';

import Firebase, { FirebaseContext } from './app/common/utils/Firebase';
import configureStore from "./app/common/store";

import { MuiThemeProvider } from '@material-ui/core';
import appTheme from './muiTheme';

const {store}  = configureStore();


const Root = (props) => (
  <MuiThemeProvider theme={appTheme}>
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <HashRouter>
          <App/>
        </HashRouter>
      </FirebaseContext.Provider>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


