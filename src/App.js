
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";  // Import the ScrollToTop component
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Service from "./components/Services/Services";

import ContactUs from "./Pages/ContactUs/ContactUs";

import Booking from "./Pages/Booking/Booking";
import WhyChooseUsPage from "./Pages/WhyChooseUsPage/WhyChooseUsPage";

import DriverHiring from "./Pages/DriverHiring/DriverHiring";

function App() {
    return (
        <Router>
            <Navbar />
            <ScrollToTop />  {/* Add ScrollToTop here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vehicles" element={<Service />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/driverhiring" element={<DriverHiring/>} />
                <Route path="/faq" element={<WhyChooseUsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
