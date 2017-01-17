import React from 'react';
import './style.css';



const TextArea = ({onChange, invalid, value, placeholder, type, ...props}) =>
  <div className={!invalid ? "input-wrapper" : "input-invalid"}>
    <textarea
      onChange={event => onChange(event.target.value)}
      value={value}
      placeholder={placeholder}
      type={type}
      className="text-area"
      {...props}/>
  </div>;

export default TextArea;
