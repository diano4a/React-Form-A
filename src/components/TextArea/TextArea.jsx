import { Component } from "react";
import './textArea.css';

class TextArea extends Component {

  render() {
    const { name, labelText, value, onChange, placeholder, errors, characterCount } = this.props;

    return (

      <div className={`form-group ${errors ? 'error' : ''}`}>
        <label htmlFor={name}>{labelText}:</label>
        <textarea 
          name={name}
          id={name}  
          rows="7"
          value={value}
          onChange={onChange}
          placeholder={placeholder}>
        </textarea>
        <div className="under-textarea-wrapper">
          {errors && <span className='error-message'>{errors}</span>}
          <span className="character-count">
            {characterCount[name]}/600 символов
          </span>
        </div>
      </div>
    )
  }
}

export default TextArea;