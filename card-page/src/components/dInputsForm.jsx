import React from "react";

const dInputsForm = (props) => {
  return (
    <div className="inputForm expiryDateField">
      <label for="">exp.date (mm/yy)</label>
      <div className="inputs">
        <input name={props.name} type="text" placeholder="mm"/>
        <input name={props.name2} type="text" placeholder="yy"/>
      </div>
    </div>
  );
};

export default dInputsForm;
