import React, { useState, useEffect, useRef } from 'react';
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavContact,
} from './NavbarElements';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const idleTimer = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setIsVisible(true); // Show navbar
    } else {
      setIsVisible(false); // Hide navbar
    }

    setPrevScrollPos(currentScrollPos);
    resetIdleTimer(); // Reset idle timer on scroll
  };

  const resetIdleTimer = () => {
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
    }
    idleTimer.current = setTimeout(() => {
      setIsVisible(false); // Hide navbar after idle time
    }, 2000); // Adjust the idle time as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    resetIdleTimer(); // Initialize the idle timer on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav isVisible={isVisible}>
      <NavLogo to="/">Truxer</NavLogo>
      <Bars onClick={toggleMenu} />
      <NavMenu isOpen={isOpen}>
        <NavLink to="/" activeStyle onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/vehicles" activeStyle onClick={closeMenu}>
          Vehicles
        </NavLink>
        <NavLink to="/booking" activeStyle onClick={closeMenu}>
          Bookings
        </NavLink>
        <NavLink to="/about" activeStyle onClick={closeMenu}>
          About Us
        </NavLink>
        <NavLink to="/driverhiring" activeStyle onClick={closeMenu}>
          Drivers
        </NavLink>
        <NavLink to="/contactus" activeStyle onClick={closeMenu}>
          Contact Us
        </NavLink>
      </NavMenu>
      <NavContact>
        <FaPhoneAlt className="phone-icon" />
        <span><strong>7506195951 /  9956553282 </strong></span>
      </NavContact>
    </Nav>
  );
};

export default Navbar;
