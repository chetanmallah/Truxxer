import React from 'react';
import { NavLink } from 'react-router-dom';
import './ViewDetailsPopUp.css';

const ViewDetailsPopup = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="popup-content">
          <img src={service.popupImage} alt={service.alt} className="popup-image" />
          <h3>{service.title}</h3>
          <p className='Starting-text'>Starting from ₹{service.startingPrice}</p>
          <div className="popup-features">
            <h4>Best for sending:</h4>
            <ul className='best-for'>
              {service.bestFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="popup-load">Max Load: {service.maxLoad}</p>
          <NavLink to="/booking" className="book-now-button">Book Now</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPopup;
