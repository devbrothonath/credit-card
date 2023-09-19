import React, { useState } from "react";
import "./inputForm.css";

const InputForm = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    inputForm,
    className,
    label,
    errorMessage,
    onChange,
    id,
    ...inputProps
  } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={className + " " + inputForm}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={()=>inputProps.name === "cvc" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputForm;
