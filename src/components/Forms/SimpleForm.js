import React, { useState } from 'react';
import './SimpleForm.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SimpleForm() {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if both pickup and drop locations are filled
    if (pickup.trim() && drop.trim()) {
      // Navigate to the booking form page and show toast
      navigate('/vehicles', { state: { showToast: true } });
    } else {
      // Show a warning toast if fields are empty
      toast.warn("Please fill both Pickup and Drop locations.");
    }
  };

  return (
    <div>
      <form className="simple-form" onSubmit={handleSubmit}>
        <label htmlFor="pickup">Pickup Location:</label>
        <input
          type="text"
          id="pickup"
          placeholder="Enter pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          required
        />
        
        <label htmlFor="drop">Drop Location:</label>
        <input
          type="text"
          id="drop"
          placeholder="Enter drop location"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          required
        />
        
        <button className='SimpleFormButton' type="submit">Check Fare</button> 
      </form>
      <ToastContainer />
    </div>
  );
}

export default SimpleForm;
