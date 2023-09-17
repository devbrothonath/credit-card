import React from "react";
import "./inputForm.css";

const inputForm = (props) => {
    const {inputForm, className, label, errorMessage, onChange, id, ...inputProps} = props;
  return (
    <div className={className + " " + inputForm}  >
      <label>{label}</label>
      {/* <input onChange={(e) => props.setUsername(e.target.value)} /> */}
      {/* <input name={props.name} /> */}
      <input {...inputProps} onChange={onChange}/>
      <span>{errorMessage}</span>
    </div>
  );
};

export default inputForm;
