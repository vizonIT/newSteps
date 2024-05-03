import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // const step = 1;

  const [step, setStep] = useState(1);
  // const [point, setPoint] = useState("plain");
  const [isOpen, setIsopen] = useState(true);

  function handlePrevious() {
    step > 1 && setStep((step) => step - 1);
  }
  function handleNext() {
    step < 3 && setStep((step) => step + 1);
    // instead of setStep(step + 1), setStep((currentValue) => currentValue + 1) is and example of the best way to update the state
  }

  // function handlePoint() {
  //   point === "plain" ? setPoint("rough") : setPoint("kid");
  //   // point === "rough" ? setPoint("ride") : setPoint("plain");
  // }
  // function handleBack() {
  //   point === "kid" ? setPoint("rough") : setPoint("plain");
  //   // point === "rough" ? setPoint("plain") : setPoint("plain");
  // }

  return (
    <>
      <button className="close" onClick={() => setIsopen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
            {/* <p>{point}</p> */}
            {/* <button onClick={handlePoint}>Point</button>
        <button onClick={handleBack}>Back</button> */}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
