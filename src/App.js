import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <Body
        step={step}
        setStep={setStep}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Body = ({ step, setStep, isOpen, setIsOpen }) => {
  const handlePrev = () => {
    // if (step > 1) setStep(step - 1);
    //or
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {" "}
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step: {step} {messages[step - 1]}
          </p>
          <div className="buttons">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
};
