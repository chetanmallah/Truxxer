import React, { useState } from 'react';
import './DriverForm.css';
import driverImage from './assets/images/Driver_Image.jpg'; // Ensure the image path is correct
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const DriverForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhoneNumber = () => {
    const { mobileNumber } = formData;
    return mobileNumber.length === 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    if (!validatePhoneNumber()) {
      toast.error('Mobile number must be exactly 10 digits.');
      setIsSubmitting(false);
      return;
    }

    const submissionTime = new Date().toISOString();

    const dataToSendSheetDB = {
      data: [
        {
          fullName: formData.fullName,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          submissionTime: submissionTime,
        }
      ]
    };

    try {
      const responseSheetDB = await axios.post(process.env.REACT_APP_SHEETDB_URL_DRIVER_HIRING, dataToSendSheetDB, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Data added to Google Sheet via SheetDB:', responseSheetDB.data);
    } catch (error) {
      console.error('Error adding data to Google Sheet via SheetDB:', error);
      toast.error('Error submitting form. Please try again.');
      setIsSubmitting(false);
      return;
    }

    const formDataWeb3 = new FormData();
    formDataWeb3.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);
    formDataWeb3.append("fullName", formData.fullName);
    formDataWeb3.append("email", formData.email);
    formDataWeb3.append("mobileNumber", formData.mobileNumber);
    formDataWeb3.append("submissionTime", submissionTime);

    try {
      const responseWeb3 = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataWeb3
      });

      const dataWeb3 = await responseWeb3.json();
      if (dataWeb3.success) {
        toast.success('Thank you for joining us! Our manager will contact you shortly.');
        console.log('Form submitted successfully via Web3Forms:', dataWeb3);
      } else {
        console.error('Error submitting form via Web3Forms:', dataWeb3.message);
        toast.error('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form via Web3Forms:', error);
      toast.error('Error submitting form. Please try again.');
    } finally {
      setFormData({
        fullName: '',
        email: '',
        mobileNumber: '',
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-section">
      <div className="form-container">
        <h2>Be the boss!</h2>
        <p>Drive with Truxer and be a leader.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your active email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        <ToastContainer />
      </div>
      <div className="image-container">
        <img src={driverImage} alt="Driver" />
      </div>
    </div>
  );
};

export default DriverForm;
