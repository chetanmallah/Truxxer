import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tata_Ace_Icon from './assets/images/Tata_Ace.png'; 
import Eight_Ft_Pickup_Icon from './assets/images/8_ft_Pickup.png';
import Three_Wheeler_Icon from './assets/images/Three_Wheeler.png';
import Eight_Ft_1_Ton_Icon from './assets/images/eight_ft_1_ton.png';
import Fourteen_Ft_Icon from './assets/images/fourteen_ft.png';
import Tata_407_Icon from './assets/images/Tata_407.png';
import Tata_Ace_Svg from './assets/images/Tata_Ace.svg'; 
import Eight_Ft_Pickup_Svg from './assets/images/eight_ft_Pickup.svg';
import Three_Wheeler_Svg from './assets/images/Three_Wheeler.svg';
import Eight_Ft_1_Ton_Svg from './assets/images/eight_ft _1Ton.svg';
import Fourteen_Ft_Svg from './assets/images/fourteen_ft.svg';
import Tata_407_Svg from './assets/images/tata407.svg';
import { chevronForward } from 'ionicons/icons';
import ViewDetailsPopup from '../ViewDetailsPopUp/ViewDetailsPopUp';
import Control from '../ControlYourFreight/Control';
import './Services.css';
import { IonIcon } from '@ionic/react';
import Footer from '../Footer/Footer';

const services = [
  {
    id: 1,
    alt: 'Tata Ace',
    title: 'Tata Ace',
    description: 'A compact mini-truck with a 750 kg payload, ideal for efficient urban and rural transport.',
    startingPrice: '230',
    bestFor: ['Fruits and Vegetables', 'Chemicals', 'FMGC Food Products'],
    maxLoad: '750kg',
    image: Tata_Ace_Icon,
    popupImage: Tata_Ace_Svg,
  },
  {
    id: 2,
    alt: "8'ft Piclkup",
    title: "8'ft Pickup",
    description: 'A reliable 8ft pickup truck, perfect for medium-sized cargo with ample load space.',
    startingPrice: '250',
    bestFor: ['Furniture', 'Appliances', 'Building Materials'],
    maxLoad: '1000kg',
    image: Eight_Ft_Pickup_Icon,
    popupImage: Eight_Ft_Pickup_Svg
  },
  {
    id: 3,
    alt: '3 Wheeler',
    title: '3 Wheeler',
    description: 'A compact and efficient 3-wheeler, perfect for small-scale deliveries and navigating tight urban spaces with ease.',
    startingPrice: '200',
    bestFor: ['Small Parcels', 'Documents', 'Courier Services'],
    maxLoad: '500kg',
    image: Three_Wheeler_Icon,
    popupImage: Three_Wheeler_Svg
  },
  {
    id: 4,
    alt: "8'ft 1 Tom",
    title: "8'ft 1-Ton",
    description: 'A sturdy truck with an 8ft load bed and 1-ton payload capacity, perfect for medium-sized goods transportation.',
    startingPrice: '300',
    bestFor: ['Construction Materials', 'Heavy Machinery', 'Bulk Goods'],
    maxLoad: '1000kg',
    image: Eight_Ft_1_Ton_Icon,
    popupImage: Eight_Ft_1_Ton_Svg
  },
  {
    id: 5,
    alt: "14'ft",
    title: "14'ft",
    description: 'A versatile truck with a 14ft load bed, suitable for transporting larger loads, offering reliability and ample cargo space.',
    startingPrice: '400',
    bestFor: ['Large Furniture', 'Appliances', 'Commercial Goods'],
    maxLoad: '1500kg',
    image: Fourteen_Ft_Icon,
    popupImage: Fourteen_Ft_Svg
  },
  {
    id: 6,
    alt: 'Tata 407',
    title: "Tata 407",
    description: 'A robust light commercial vehicle with a 2.25-ton payload, known for its durability and performance.',
    startingPrice: '350',
    bestFor: ['Medium-Sized Loads', 'Retail Goods', 'Electronics'],
    maxLoad: '1200kg',
    image: Tata_407_Icon,
    popupImage: Tata_407_Svg
  }
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();

  const handleViewDetails = (service) => {
    setSelectedService(service);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    if (location.state?.showToast) {
      toast.info('Please select the vehicle from here.');
    }
  }, [location.state]);

  return (
    <>
      <section className="services-section" id="service">
        <header className="services-section-header">
          <p className="services-section-subtitle">All Vehicles</p>
          <h2 className="services-section-title">Trusted For Our Services</h2>
          <p className="services-section-text">
          Explore Our Wide Range of Vehicles to Suit Every Cargo Requirement
          </p>
        </header>
        <ul className="services-service-list" role="list" aria-labelledby="service">
          {services.map((service) => (
            <li className="services-service-item" key={service.id}>
              <article className="services-service-card">
                <div className="services-card-icon">
                  <img src={service.image} width="100" height="80" loading="lazy" alt={service.alt} />
                </div>
                <h3 className="services-card-title">{service.title}</h3>
                <p className="services-card-text">{service.description}</p>
                <button 
                  className="services-btn-link" 
                  aria-label={`View details about ${service.title} service`} 
                  onClick={() => handleViewDetails(service)}
                >
                  <IonIcon icon={chevronForward} aria-hidden="true"></IonIcon>
                  <span className="services-span">View Detail</span>
                </button>
              </article>
            </li>
          ))}
        </ul>
        <ViewDetailsPopup service={selectedService} onClose={handleClosePopup} />
      </section>
      <Control />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Service;
