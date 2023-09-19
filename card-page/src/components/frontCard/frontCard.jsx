import React from "react";
import "./frontCard.css"

const frontCard = ({username, cardNumber, month, year}) => {
  return (
    <div>
      <p className="cardNumber">{cardNumber}</p>
      <p className="userName">{username}</p>
      <p className="month-year">{month}/{year}</p>
    </div>
  );
};


export default frontCard;
