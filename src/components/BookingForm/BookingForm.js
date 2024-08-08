import React, { useState } from 'react';
import './BookingForm.css';
import Tata_Ace from '../BookingForm/assets/images/Tata_Ace.svg';
import eight_ft_1Ton from '../BookingForm/assets/images/eight_ft _1Ton.svg';
import Three_Wheeler from '../BookingForm/assets/images/Three_Wheeler.svg';
import eight_ft_Pickup from '../BookingForm/assets/images/eight_ft_Pickup.svg';
import fourteen_ft from '../BookingForm/assets/images/fourteen_ft.svg';
import tata407 from '../BookingForm/assets/images/tata407.svg';
import TopRightImage from '../BookingForm/assets/images/weight.svg';
import axios from 'axios';

const vehicles = [
    { name: "Tata Ace", price: "₹350 - ₹380", img: Tata_Ace, weight: "700 kg" },
    { name: "8'ft 1 Ton", price: "₹530 - ₹560", img: eight_ft_1Ton, weight: "800 kg" },
    { name: "3 Wheeler", price: "₹300 - ₹325", img: Three_Wheeler, weight: "600 kg" },
    { name: "8'ft Pickup", price: "₹545 - ₹575", img: eight_ft_Pickup, weight: "900 kg" },
    { name: "14'ft", price: "₹1780 - ₹1820", img: fourteen_ft, weight: "1000 kg" },
    { name: "Tata 407", price: "₹1145 - ₹1175", img: tata407, weight: "1200 kg" },
];

const BookingForm = () => {
    const [result, setResult] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

        // Send data to SheetDB
        const sheetDBUrl = process.env.REACT_APP_SHEETDB_URL_BOOKING_FORM;

        try {
            const responseSheetDB = await axios.post(sheetDBUrl, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Data added to Google Sheet via SheetDB:', responseSheetDB.data);
        } catch (error) {
            console.error('Error adding data to Google Sheet via SheetDB:', error);
            setResult("Error submitting form. Please try again.");
            setLoading(false);
            return;
        }

        // Submit to Web3Forms
        try {
            const responseWeb3 = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const dataWeb3 = await responseWeb3.json();
            if (dataWeb3.success) {
                setResult("Form Submitted Successfully");
                setShowToast(true);
                event.target.reset();

                setTimeout(() => {
                    setResult("");
                    setShowToast(false);
                    setLoading(false); // Reset loading state
                }, 5000);

                console.log('Form submitted successfully via Web3Forms:', dataWeb3);
            } else {
                console.error('Error submitting form via Web3Forms:', dataWeb3.message);
                setResult("Error submitting form. Please try again.");
                setLoading(false);
            }
        } catch (error) {
            console.error('Error submitting form via Web3Forms:', error);
            setResult("Error submitting form. Please try again.");
            setLoading(false);
        }
    };

    const validatePhoneNumber = (event) => {
        const phoneInput = event.target;
        const phone = phoneInput.value;
        if (phone.length < 10 || phone.length > 10) {
            phoneInput.setCustomValidity("Phone number must be exactly 10 digits.");
        } else {
            phoneInput.setCustomValidity("");
        }
    };

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="left-section">
                        <h2 className="offer-title">Our Offers</h2>
                        <div className="stack-container">
                            {vehicles.map((vehicle, index) => (
                                <div
                                    className="stack"
                                    key={index}
                                    tabIndex="0"
                                    aria-label={`Select ${vehicle.name}`}
                                >
                                    <div className="top-right-container">
                                        <img src={TopRightImage} alt="Weight Icon" className="top-right-img" />
                                        <span className="weight-text">{vehicle.weight}</span>
                                    </div>
                                    <img src={vehicle.img} alt={vehicle.name} />
                                    <div className="stack-info">
                                        <p className="vehicle-name">{vehicle.name}</p>
                                        <p className="vehicle-price">{vehicle.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="form-container">
                            <h2>Booking Details</h2>
                            <form onSubmit={onSubmit}>
                                <input required type="text" name="name" placeholder="Your Name" aria-label="Your Name" />
                                <input required type="text" name="pickupLocation" placeholder="Pickup Location" aria-label="Pickup Location" />
                                <input required type="text" name="dropoffLocation" placeholder="Drop-off Location" aria-label="Drop-off Location" />
                                <input required type="tel" name="phone" placeholder="Phone Number" aria-label="Phone Number" className="full-width" onInput={validatePhoneNumber} />
                                <input required type="email" name="email" placeholder="Email" aria-label="Email" />
                                <input required type="text" name="vehicleName" placeholder="Vehicle Name" aria-label="Vehicle Name" />
                                <input required type="date" name="pickupDate" placeholder="Pickup Date" aria-label="Pickup Date" />
                                <button type="submit" disabled={loading}>
                                    {loading ? 'Submitting...' : 'Book'}
                                </button>
                            </form>
                            <span>{result}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {showToast && (
                <div className="toast-message">
                    <p>Thank you for joining with us. Every detail about the vehicle will be provided to you shortly through your given number.</p>
                    <button className="toast-close" onClick={() => setShowToast(false)}>×</button>
                </div>
            )}
        </>
    );
};

export default BookingForm;
