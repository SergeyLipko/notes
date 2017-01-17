import React, { Component } from 'react';
import {connect} from 'react-redux';
import Input from '../../../components/Input';
import {addUser} from '../../../redux/modules/users';



const mapDispatchToProps = dispatch => ({
  addUser: data => dispatch(addUser(data))
});

class SignUp extends Component{
  state = {
    login: '',
    password: '',
    confirmPassword: '',
    errors: {
      login: false,
      password: false,
      confirmPassword: false
    }
  };

  render(){
    let {login, password, confirmPassword} = this.state;
    return (
      <div>
        <span>Sign Up</span>
        <Input
          onBlur={() => this.onBlur('login', this._loginValidation)}
          onChange={this.onFieldChange('login')}
          value={login}
          placeholder={'Login'}/>
        <Input
          onBlur={() => this.onBlur('password', this._passwordValidation)}
          onChange={this.onFieldChange('password')}
          value={password}
          placeholder={'Password'}/>
        <Input
          onChange={this.onFieldChange('confirmPassword')}
          value={confirmPassword}
          placeholder={'Confirm password'}/>
        <button onClick={this.signUp}>
          Sign up
        </button>
      </div>
    )
  }

  _loginValidation = value => value.length > 4;
  _passwordValidation = value => value.length > 4;

  onBlur = (field, validateFunc) => {
    if(!validateFunc(this.state[field])){
        this.setState({
          errors: {
            ...this.state.errors,
            [field]: true
          }
        });
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          [field]: false
        }
      })
    }
  }

  onFieldChange = field => value => {
    this.setState({
      [field]: value
    })
  };

  signUp = () => {
    let {login, password} = this.state;
    this.props.addUser({login, password});
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
