import { useState } from 'react';
import Button from './Button';
import StepMessage from './StepMessage';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (event) => {
    const { name } = event.target.closest('button');
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

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              name="prev"
              opacity={step === 1 ? 0.5 : 1}
              pointerEvents={step === 1 ? 'none' : 'auto'}
              onClick={handleClick}
            >
              <span onClick={handleClick}>👈</span> Previous
            </Button>

            <Button
              name="next"
              opacity={step === 3 ? 0.5 : 1}
              pointerEvents={step === 3 ? 'none' : 'auto'}
              onClick={handleClick}
            >
              Next <span onClick={handleClick}>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
