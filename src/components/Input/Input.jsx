import React from 'react';
import './input.css';

const Input = ({ value, name, labelText, type, onChange, placeholder, errors }) => {
  return (
    <div className={`form-group ${errors ? 'error' : ''}`}>
      <label htmlFor={name}>{labelText}:</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errors && <span className="error-message">{errors}</span>}
    </div>
  );
};

export default Input;
