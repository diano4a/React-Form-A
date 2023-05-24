import { Component } from "react";
import "./input.css";

class Input extends Component {


  render() {
    const { value, name, labelText, type, onChange, placeholder, errors } = this.props;

    return (
      <div className={`form-group ${errors ? 'error' : ''}`}>
        <label htmlFor={name}>{labelText}:</label>
        <input 
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}/>
          {errors && <span className="error-message">{errors}</span>}
      </div>
    );
  }
}

export default Input;