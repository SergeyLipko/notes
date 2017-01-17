import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import {authenticateUser} from '../../redux/modules/users';

export function requireAuthentication(Component) {

  const mapStateToProps = ({users}) => ({
    isAuthenticated: users.isAuthenticated
  });

  const mapDispatchToProps = dispatch => ({
    _authenticateUser: () => dispatch(authenticateUser())
  });

  class Authenticated extends React.Component {

    _updateSession = async() => {
      let token = localStorage.getItem('token');
      if(token){
        this.props._authenticateUser();
      }
    };

    componentWillMount(){
      this._updateSession();
      setTimeout(() => {
        if(!this.props.isAuthenticated){
          browserHistory.push('/signIn');
        }
      }, 0.0000001)
    }

    componentWillReceiveProps(nextProps){
      this._updateSession();
      setTimeout(() => {
        if(!nextProps.isAuthenticated){
          browserHistory.push('/signIn');
        }
      }, 0.0000001)
    }

    render() {
      return (
        <div>

          {this.props.isAuthenticated
            ? <Component {...this.props}/>
            : null
          }
        </div>
      )
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Authenticated);
}