import React, { Component } from 'react';
import { Link } from 'react-router';
import {FlatButton} from 'material-ui';
import './login.css';


class Login extends Component{
  render(){
    return (
      <div>
        <div>
          {this.props.children}
        </div>
        <ul className="login-nav-wrapper">
          <Link
            to='signIn'
            activeClassName="login-link-active">
            <FlatButton label='Sign In'/>
          </Link>
          <Link
            to='signUp'
            activeClassName="login-link-active">
            <FlatButton label='Sign Up'/>
          </Link>
        </ul>
      </div>
    )
  }
}

export default Login;
