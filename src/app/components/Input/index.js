import React from 'react';
import './style.css';



const Input = ({onChange, invalid, value, placeholder, type, ...props}) =>
  <div className={!invalid ? "input-wrapper" : "input-invalid"}>
    <input
      onChange={event => onChange(event.target.value)}
      value={value}
      placeholder={placeholder}
      type={type}
      className="input"
      {...props}/>
  </div>;

export default Input;
