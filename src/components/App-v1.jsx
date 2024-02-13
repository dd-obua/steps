import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (event) => {
    const { name } = event.target;
    if (name === 'prev') step > 1 && setStep((s) => s - 1);
    if (name === 'next') step < 3 && setStep((s) => s + 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              name="prev"
              style={{
                pointerEvents: step <= 1 ? 'none' : 'auto',
                opacity: step <= 1 ? 0.5 : 1,
              }}
              onClick={handleClick}
            >
              Previous
            </button>
            <button
              name="next"
              style={{
                pointerEvents: step >= 3 ? 'none' : 'auto',
                opacity: step >= 3 ? 0.5 : 1,
              }}
              onClick={handleClick}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
