import React, { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: "What is the process to sign up?",
    answer: "The sign-up process is simple. Fill out the registration form on our website, upload the required documents, and get started immediately.",
  },
  {
    question: "What documents are required?",
    answer: "You will need to provide valid identification, proof of address, and vehicle registration documents.",
  },
  {
    question: "How do I get booking loads?",
    answer: "Once registered, you can get booking loads directly from our app. Just match, accept, and get working!",
  },
  {
    question: "Is there support available?",
    answer: "Yes, our support team is available 24/7 to assist you with any queries or issues you might have.",
  },
  {
    question: "How can I track my earnings?",
    answer: "You can track your earnings in real-time through the app. It provides detailed reports on your completed jobs and payments.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {item.question}
              <span className={`faq-toggle ${activeIndex === index ? 'active' : ''}`}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
