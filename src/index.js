import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {requireAuthentication} from './app/containers/Authenticated';
import App from './app/App';
import Login from './app/containers/Login';
import SignUp from './app/containers/Login/SignUp';
import SignIn from './app/containers/Login/SignIn';
import Notes from './app/containers/Notes';





import createStore from './app/redux/store';
const store = createStore();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRedirect to='signIn'/>
          <Route component={Login}>
            <Route path='signIn' component={SignIn}/>
            <Route path='signUp' component={SignUp}/>
          </Route>
          <Route path="notes" component={requireAuthentication(Notes)}/>

        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
