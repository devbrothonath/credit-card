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

  const specialInput = () => {
    const inputValue = document.querySelector('[name="cardNumber"]');
    inputValue.addEventListener("input", () => {
      inputValue.value = formatNumber(inputValue.value.replaceAll(" ", ""));
    });
    console.log(inputValue)

    const formatNumber = (number) =>
      number.split("").reduce((seed, next, index) => {
        if (index !== 0 && !(index % 4)) seed += " ";
        return seed + next;
      }, "");
  };
  return (
    <div className={className + " " + inputForm}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={()=>inputProps.name === "cvc" && setFocused(true)}
        // onClick={specialInput}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputForm;
