import Rectangle from "./assets/RectangleJpeg.jpg";
import EllipseB from "./assets/EllipseBig.svg";
import EllipseS from "./assets/EllipseSmall.svg";
import { useRef, useState } from "react";
import "./Apps.css";
import InputForm from "./components/inputForm.jsx";
import DInputsForm from "./components/dInputsForm.jsx";
import FrontCard from "./components/frontCard.jsx";

function App() {
  const [values, setValues] = useState({
    username: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "card holder name",
      errorMessage: "cardholder name required",
      label: "username",
      inputForm: "inputForm",
      className: "div1",
      pattern: "^[a-zA-Z].*[s.]*.{0,30}$",
      // pattern: "^4[0-9]{12}(?:[0-9]{3})?$",
      required: true,
    },
    {
      id: 2,
      name: "cardNumber",
      type: "text",
      placeholder: "card holder number",
      errorMessage: "card number required",
      label: "cardNumber",
      inputForm: "inputForm",
      className: "div2",
      // pattern: "^4[0-9]{12}(?:[0-9]{3})?$",
      pattern: "^4[0-9]{15}$",
      required: true,
    },
    {
      id: 3,
      name: "month",
      type: "number",
      min: "1",
      max: "12",
      placeholder: "month",
      errorMessage: "",
      label: "month",
      inputForm: "inputForm",
      className: "div3",
    },
    {
      id: 4,
      name: "year",
      type: "number",
      min: "23",
      max: "43",
      placeholder: "year",
      errorMessage: "",
      label: "&zwnj;",
      inputForm: "inputForm",
      className: "div4",
    },
    {
      id: 5,
      name: "cvc",
      type: "text",
      placeholder: "cvc",
      errorMessage: "CVC must be numeric",
      label: "cvc",
      inputForm: "inputForm",
      className: "div5",
      pattern: "^[1-9]{3}$",
      required: true,
    },
  ];

  // console.log(inputs[0]);
  // const usernameRef = useRef();

  // console.log("re-rendered");

  let person;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const personData = Object.fromEntries(data.entries());
    setSubmitted(true);

    person = personData;
    // console.log(personData);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="background">
      <div className="flexbox">
        <div className="card-images">
          <div className="frontCard">
            {submitted && (
              <FrontCard
                username={values.username}
                cardNumber={values.cardNumber}
                month={values.month}
                year={values.year}
                cvc={values.cvc}
              />
            )}
          </div>
          {/* <div className="frontCard">
            <p>{person.cardNumber}</p>
            <p>{person.username}</p>
            <p>{values.month}</p>
            <p>{values.year}</p>
            <p>{person.cvc}</p>
          </div> */}
          <div className="backCard">bye</div>
        </div>
        <div className="formPage">
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <InputForm
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className="div6">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  console.log(person);
}

export default App;
