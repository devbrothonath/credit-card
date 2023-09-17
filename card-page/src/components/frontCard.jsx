import React from "react";

const frontCard = (props) => {
  return (
    <div>
      <p>{props.username}</p>
      <p>{props.cardNumber}</p>
      <p>{props.month}</p>
      <p>{props.year}</p>
      <p>{props.cvc}</p>
    </div>
  );
};

export default frontCard;
