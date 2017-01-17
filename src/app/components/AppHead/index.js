import React from 'react';
import logo from '../../../../assets/img/logo.svg';
import './style.css';


const AppHead = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to superheroic Note App</h2>
    </div>
  )
};

export default AppHead;