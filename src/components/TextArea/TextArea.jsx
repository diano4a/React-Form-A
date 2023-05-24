import React from 'react';
import './textArea.css';

const TextArea = ({ name, labelText, value, onChange, placeholder, errors, characterCount }) => {
  
  return (
    <div className={`form-group ${errors ? 'error' : ''}`}>
      <label htmlFor={name}>{labelText}:</label>
      <textarea
        name={name}
        id={name}
        rows="7"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
      <div className="under-textarea-wrapper">
        {errors && <span className="error-message">{errors}</span>}
        <span className="character-count">
          {characterCount[name]}/600 символов
        </span>
      </div>
    </div>
  );
};

export default TextArea;
