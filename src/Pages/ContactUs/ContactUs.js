
import React from 'react';
import location_icon from './assets/Images/location-icon.png';
import mail_icon from './assets/Images/mail-icon.png';
import msg_icon from './assets/Images/msg-icon.png';
import phone_icon from './assets/Images/phone-icon.png';
import './ContactUs.css';
import Footer from '../../components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Thank you for contacting with us . Our team will contact you shortly.");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Submission failed. Please try again.");
      setResult(data.message);
    }
  };

  return (
    <>
      <div className='contact'>
        <div className="contact-col">
          <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          <ul>
            <li><img src={mail_icon} alt="" />Chetanmallah28@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91 750-6195-951</li>
            <li><img src={location_icon} alt="" />Nahur(W), Mumbai, India</li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your full name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Gmail</label>
            <input type="email" name='email' placeholder='Enter your working Gmail ' required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
            <button type='submit' className='Contactusbutton'>
              Submit Now
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default ContactUs;
