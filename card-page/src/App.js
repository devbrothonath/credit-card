import Rectangle from "./assets/RectangleJpeg.jpg";
import EllipseB from "./assets/EllipseBig.svg";
import EllipseS from "./assets/EllipseSmall.svg";
import { useRef, useState } from "react";
import "./Apps.css";
import InputForm from "./components/inputForm.jsx";
import DInputsForm from "./components/dInputsForm.jsx";
import FrontCard from "./components/frontCard.jsx";
import BackCard from "./components/backCard/backCard";

function App() {
  const [values, setValues] = useState({
    username: "jane appleseed",
    cardNumber: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  });

  const [submitted, setSubmitted] = useState(false);

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
      // pattern: "^[0-9]{4}(?:[ ]?[0-9]{4}){3}$",
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
    setSubmitted(true);

    // person = personData;
    console.log(personData);
  };
  // console.log(handleSubmit.e.da);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  // const inputValue = document.querySelector("#cardNumber");
  // console.log(inputValue);

  return (
    <div className="background">
      <div className="flexbox">
        <div className="card-images">
          <div className="frontCard">
            <img src={EllipseB} className="ellipse-big"></img>
            <img src={EllipseS} className="ellipse-small"></img>
            { (
              <FrontCard
                username={values.username}
                cardNumber={values.cardNumber}
                month={values.month}
                year={values.year}
                cvc={values.cvc}
              />
            )}
          </div>
          <div className="backCard">{
            <BackCard
            cvc={values.cvc}
            />
          }</div>
        </div>
        <div className="formPage">
          <form onSubmit={handleSubmit}>
            
            {inputs.map((input) => (
              <InputForm
                key={input.id}
                {...input}
                // value={values[input.name]}
                onChange={onChange}
              />
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
