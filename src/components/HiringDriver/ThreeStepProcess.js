import React from 'react';
import './ThreeStepProcess.css';

const ThreeStepProcess = () => {
  return (
    <div className="three-step-process">
      <h2>Ready?<br />Just a three-step process.</h2>
      <div className="steps-container">
        <div className="step">
          <h3>1. Sign up</h3>
          <p>A simple sign up process online begins with filling out an online registration form on our website.</p>
        </div>
        <div className="step">
          <h3>2. File documents</h3>
          <p>After successful registration, upload the required documents! Make sure they are authentic and our support team is just a call away.</p>
        </div>
        <div className="step">
          <h3>3. Get moving at take 3!</h3>
          <p>Work with us, or directly get booking loads on our app. Be your own boss!</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeStepProcess;
