import React from 'react';
import './NewsLetter.css';
import New1 from './assets/images/New1.jpeg';

const Newsletter = () => {
  return (
    <section aria-label="newsletter" className="newsletter">
      <div className="container">
        <figure className="newsletter-banner img-holder">
          <img src={New1} width="303" height="381" alt="newsletter banner" className="w-100" />
          <div className="overlay-content">
            <div className="orange-line">
              <span className="line-text">Subscribe for offers and news</span>
              <form action="" className="newsletter-form">
                <input type="email" name="email_address" placeholder="Enter Your Email" aria-label="email" className="email-field" />
                <button type="submit" className="newsletter-btn">Subscribe Now</button>
              </form>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Newsletter;


/*
import React, { useState } from 'react';
import './Newsletter.css';
import New1 from './assets/images/New1.jpeg';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      setEmail(''); // Clear the email field
    }
  };

  return (
    <section aria-label="newsletter" className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Subscribe for offers and news</h2>
          <form action="" className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              name="email_address" 
              placeholder="Enter Your Email" 
              aria-label="email" 
              className="email-field" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter-btn">Subscribe Now</button>
          </form>
        </div>
        {showToast && <div className="toast">Email submitted successfully!</div>}
      </div>
    </section>
  );
};

export default Newsletter;
*/