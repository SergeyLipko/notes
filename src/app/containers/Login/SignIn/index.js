import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../../redux/modules/users';
import {TextField, RaisedButton} from 'material-ui';
import './style.css';





const mapStateToProps = ({users}) => ({
  error: users.authenticationError
});
const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginUser(data))
});

class SignIn extends Component {
  state = {
    login: '',
    password: ''
  };

  render(){
    let {login, password} = this.state;
    let {error} = this.props;

    return (
      <div className="login-form-wrapper">
        <span className="login-form-title">Sign In</span>
          <form className="login-form">
            <TextField
              underlineFocusStyle={{color: '#00bcd4'}}
              onChange={this.handleChange('login')}
              value={login}
              hintText='Login'/>
            <TextField
              underlineFocusStyle={{color: '#00bcd4'}}
              onChange={this.handleChange('password')}
              value={password}
              hintText='Password'/>
          </form>

        {error &&
          <span className="login-form-error-msg">
            {this.props.error}
          </span>
        }
        <RaisedButton
          primary={true}
          onClick={this._signUp}
          label='Sign in'/>
      </div>
    )
  }


  handleChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
  };

  _signUp = () => {
    let {login, password} = this.state;
    this.props.login({login, password});
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
