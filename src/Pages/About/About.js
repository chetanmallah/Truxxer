import React from 'react';
import './About.css'; // Import the CSS file for styling
import profileImage from './assets/images/aboutimg.jpg'; // Make sure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCog, faCubes, faTree } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer/Footer'

const About = () => {
  return (
    <div className="about-container">
      <section className="profile-section">
        <div className="profile-text">
          <h2 className="section-title">
            COMPANY PROFILE
            <span className="highlight"></span>
          </h2>
          <h3>Truxer Logistics makes business flow!</h3>
          <p>
            Truxer Logistics is one of the leading logistics companies in India providing operational capabilities in freight movement and logistics across India and worldwide. We have tie ups with several shipping companies throughout India as one of leading supply chain management companies. We design and implement industry-leading solutions in both freight management and contract logistics.
          </p>
          <p>
            With more than 100 man years of Logistics experience, and nearly 200 man years of Transportation and corporate experience, we are deeply involved in logistics and transportation activities for more than a decade to provide viable answers to the most challenging supply-chain questions.
          </p>
          <p>
            Truxer Logistics applies its renowned operational expertise to provide best-in-class services across India and its integrated network worldwide. Our focus is equally on general business and the specialist needs of the automotive, consumer & retail, energy, healthcare, industrial, and technology sectors.
          </p>
        </div>
        <div className="profile-image">
          <img src={profileImage} alt="Company Profile" />
        </div>
      </section>

      <section className="mission-performance-section">
        <div className="mission">
          <h2 className="section-title">
            OUR MISSION
            <span className="highlight"></span>
          </h2>
          <ul>
            <li>To provide zero-defect quality logistics with advanced computer technology, in an efficient and customer-driven manner, resulting in total satisfaction for our customers</li>
            <li>To deliver superior service to our worldwide trading partners by providing exceptional value, consistent performance, and creative logistics solutions</li>
            <li>To invest in quality people with enthusiasm for excellence and desire for advancement</li>
            <li>To provide a healthy and safe working environment with resources, programs, and benefits designed to improve productivity and enhance all employees' quality of life</li>
            <li>To engage in good corporate citizenship and maintain the highest ethical and moral standards</li>
            <li>To treat our clients, suppliers, and employees with fairness, dignity, and respect</li>
          </ul>
        </div>
        <div className="performance">
          <h2 className="section-title">
            OUR PERFORMANCE
            <span className="highlight"></span>
          </h2>
          <ul>
            <li>We are often called upon to react within 2-3 hours for special deliveries/collections.</li>
            <li>Using our own fleet makes this possible ensuring goods are delivered by Truxer Logistics, tracked by us and signed for by you.</li>
            <li>Our staff of dedicated planners have a wealth of experience, we manage challenges as they arise and provide the most cost-effective and suitable solutions.</li>
            <li>Truxer Logistics have the resources and capabilities to take responsibility for your consignment allowing you to concentrate on your day-to-day business.</li>
            <li>Investing in technology to provide fast, accurate and cost-effective service</li>
            <li>Living up to highest industry standards</li>
          </ul>
        </div>
      </section>

      <section className="core-values-section">
        <h2 className="section-title">
          Our core values
          <span className="highlight"></span>
        </h2>
        <p className="section-subtitle">THE THING THAT MAKES US DIFFERENT</p>
        <div className="core-values">
          <div className="core-value">
            <FontAwesomeIcon icon={faGraduationCap} size="3x" />
            <h3>Always learning</h3>
          </div>
          <div className="core-value">
            <FontAwesomeIcon icon={faCog} size="3x" />
            <h3>Latest Technology</h3>
          </div>
          <div className="core-value">
            <FontAwesomeIcon icon={faCubes} size="3x" />
            <h3>Safety & Quality</h3>
          </div>
          <div className="core-value">
            <FontAwesomeIcon icon={faTree} size="3x" />
            <h3>Care for Environment</h3>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
