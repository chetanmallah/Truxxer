import React from 'react';
import './DriverPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faTruckLoading, faPhone } from '@fortawesome/free-solid-svg-icons';

const DriverPage = () => {
  return (
    <div className="driver-page">
      <h1>Maximize earnings, faster and easier than ever before! You are just a click away.</h1>
      <div className="features">
        <div className="feature">
          <FontAwesomeIcon icon={faMoneyBillWave} size="3x" />
          <h2>Instant pay</h2>
          <p>Delayed payments have never been our thing! Paperless invoices, constant communication & consistent support.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faTruckLoading} size="3x" />
          <h2>Instant loads</h2>
          <p>A free download from iOS or Android takes you to instant bookable loads. It is as simple as match, accept & get working!</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faPhone} size="3x" />
          <h2>Constant support</h2>
          <p>You lead from start to finish while our team is available to lend a helping hand 24X7.</p>
        </div>
      </div>
    </div>
  );
};

export default DriverPage;
