import { useState } from "react";
import "./App.css";
import InputForm from "./components/inputForm/inputForm.jsx";
import FrontCard from "./components/frontCard/frontCard.jsx";
import BackCard from "./components/backCard/backCard";
import EllipseB from "./assets/EllipseBig.svg";
import EllipseS from "./assets/EllipseSmall.svg";

function App() {
  const [values, setValues] = useState({
    username: "jane appleseed",
    cardNumber: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  });

  // const [submitted, setSubmitted] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "e.g. Jane Appleseed",
      errorMessage: "cardholder name required",
      label: "cardholder name",
      inputForm: "inputForm",
      className: "div1",
      pattern: "^[a-zA-Z].*[s.]*.{0,30}$",
      required: true,
    },
    {
      id: "cardNumberBox",
      name: "cardNumber",
      type: "text",
      placeholder: "e.g. 1234 5678 9123 0000",
      errorMessage: "card number required of 16 characters",
      label: "card number",
      inputForm: "inputForm",
      className: "div2",
      pattern: "^[0-9]{4}( ?[0-9]{4}){3}$",
      required: true,
    },
    {
      id: 3,
      name: "month",
      type: "number",
      min: "1",
      max: "12",
      placeholder: "MM",
      errorMessage: "1-12",
      label: "exp. date (mm/yy)",
      inputForm: "inputForm",
      className: "div3",
      required: true,
    },
    {
      id: 4,
      name: "year",
      type: "number",
      min: "23",
      max: "43",
      placeholder: "YY",
      errorMessage: "23-43",
      label: "&zwnj;",
      inputForm: "inputForm",
      className: "div4",
      required: true,
    },
    {
      id: 5,
      name: "cvc",
      type: "text",
      placeholder: "e.g. 123",
      errorMessage: "CVC must be numeric",
      label: "cvc",
      inputForm: "inputForm",
      className: "div5",
      pattern: "^[1-9]{3}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const personData = Object.fromEntries(data.entries());
    // can send the "personData" values across the API, contains the data input of form after clicking the "confirm" button
    // console.log(personData);
    // setSubmitted(true);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="background">
      <div className="flex-container">
        <div className="card-images">
          <div className="frontCard">
            <img src={EllipseB} className="circle-big" alt="big-circle"></img>
            <img
              src={EllipseS}
              className="circle-small"
              alt="small-circle"
            ></img>
            {
              <FrontCard
                username={values.username}
                cardNumber={values.cardNumber}
                month={values.month}
                year={values.year}
              />
            }
          </div>
          <div className="backCard">
            {<BackCard cvc={values.cvc} />}
          </div>
        </div>
        <div className="formPage">
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <InputForm key={input.id} {...input} onChange={onChange} />
            ))}
            <div className="div6">
              <button className="btn">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
