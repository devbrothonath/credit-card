import React from "react";
import "./frontCard.css"

const frontCard = ({username, cardNumber, month, year, cvc}) => {
  return (
    <div>
      <p className="cardNumber">{cardNumber}</p>
      <p className="userName">{username}</p>
      <p className="month-year">{month}/{year}</p>
      {/* <p className="year">{year}</p> */}
      {/* <p>{cvc}</p> */}
    </div>
  );
};


export default frontCard;
