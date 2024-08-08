import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import shippersImage from './assets/images/shippers.jpg';
import carriersImage from './assets/images/carrier.jpg';
import './Shippers.css';

const Shippers = () => {
  return (
    <div className="shippers-container">
      <div className="shippers-item shippers-item-shippers">
        <img src={shippersImage} alt="Shippers" className="shippers-image" />
        <div className="shippers-content shippers-content-shippers">
          <h2 className="shippers-heading">SHIPPERS</h2>
          <h1 className="shippers-title">Get access to our near unlimited capacity of trucks</h1>
          <p className="shippers-description">
            Truxer offers unparalleled flexibility and uncompromising quality, delivering lower shipping costs.
          </p>
          {/* NavLink for "SAVE MONEY NOW" */}
          <NavLink to="/booking" className="shippers-button" activeClassName="active">SAVE MONEY NOW</NavLink>
        </div>
      </div>
      <div className="shippers-item">
        <div className="shippers-content">
          <h2 className="shippers-heading">CARRIERS</h2>
          <h1 className="shippers-title">Keep your trucks moving</h1>
          <p className="shippers-description">
            Truxer puts you in the driver's seat propelling your business forward by keeping your trucks full.
          </p>
          {/* NavLink for "EARN MONEY NOW" */}
          <NavLink to="/driverhiring" className="shippers-button" activeClassName="active">EARN MONEY NOW</NavLink>
        </div>
        <img src={carriersImage} alt="Carriers" className="shippers-image" />
      </div>
    </div>
  );
};

export default Shippers;
