import React from 'react';
import './WhatWeOffer.css'; // Import the CSS file for styling
import contractImage from './assets/images/Contract.png';
import freightImage from './assets/images/Aeroplan.png';
import CustomerCare from './assets/images/Customer_Service.png';
import consultingImage from './assets/images/Consulting.jpg';

const WhatWeOffer = () => {
  return (
    <div className="logistics-services">
      <h2>What we Offer</h2>
      <h3>TAILORED LOGISTIC SERVICES</h3>
      <div className="service-container">
        <div className="service-item">
          <img src={contractImage} alt="Contract logistics" />
          <div className="service-content">
            <h4>Contract logistics</h4>
            <p>Need custom logistic service? We got it covered. From overland, air, rail and sea transportation. Fast, safe and accurate shipment provided all over the globe.</p>
          </div>
        </div>
        <div className="service-item">
          <img src={freightImage} alt="Overland, Ocean and Air Freight" />
          <div className="service-content">
            <h4>Overland, Ocean and Air Freight</h4>
            <p>Truxer company offers the best logistics services using all means of supply chain. Use our overland, ocean and air freight solutions for shipment of your goods.</p>
          </div>
        </div>
        <div className="service-item">
          <img src={CustomerCare} alt="12/7 Customer Care" />
          <div className="service-content">
            <h4>12/7 Customer Care </h4>
            <p>Truxer offers intelligent warehouse solution. Lower your storage and good maintenance by using our modern and intelligent warehouses. You can see all locations on location page.</p>
          </div>
        </div>
        <div className="service-item">
          <img src={consultingImage} alt="Consulting Services" />
          <div className="service-content">
            <h4>Consulting Services</h4>
            <p>Don't know what means of transportation would be right for you, or you need someone for full supply chain management? Please contact us. Our team of professionals will be happy to help.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
