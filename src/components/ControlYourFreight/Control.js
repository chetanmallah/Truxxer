import React from 'react';
import './Control.css';
import controlImage from './assets/images/Tracking.png'; // Main control image
import digitalBookingIcon from './assets/images/Laptop.svg'; // Digital Booking icon
import liveTrackingIcon from './assets/images/Gps.svg'; // Live Tracking icon
import dataAnalyticsIcon from './assets/images/Analytics.svg'; // Data Analytics icon
import seamlessIntegration from './assets/images/SeamlessIntegration.svg'; // Seamless Integration icon

const Control = () => {
  return (
    <div className="control-container">
      <div className="control-content">
        <img src={controlImage} alt="Control your freight" className="control-image" />
        <div className="control-text">
          <h1>CONTROL YOUR FREIGHT</h1>
          <p>
            With Truxer, your freight is always at your fingertips. Just log in to our secure online
            platform to quote, book, track, and manage your shipments, 24/7.
          </p>
          <div className="control-features">
            <div className="feature">
              <img src={digitalBookingIcon} alt="Digital Booking" className="feature-icon" />
              <p>Digital Booking</p>
            </div>
            <div className="feature">
              <img src={liveTrackingIcon} alt="Live Tracking" className="feature-icon" />
              <p>Live Tracking</p>
            </div>
            <div className="feature">
              <img src={dataAnalyticsIcon} alt="Data Analytics" className="feature-icon" />
              <p>Data Analytics</p>
            </div>
            <div className="feature">
              <img src={seamlessIntegration} alt="Seamless Integration" className="feature-icon" />
              <p>Seamless Integration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
