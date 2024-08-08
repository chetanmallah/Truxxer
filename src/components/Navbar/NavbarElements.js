import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #3a3a3a;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 12;
  position: fixed;
  width: 100%;
  top: ${({ isVisible }) => (isVisible ? '0' : '-60px')};
  transition: top 0.3s;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const NavLogo = styled(Link)`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  padding-left: 20px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const NavLink = styled(Link)`
  color: #d3d3d3;
  text-decoration: none;
  padding: 1rem;
  display: block;
  cursor: pointer;
  text-align: center;

  &.active {
    color: #ffffff;
  }

  &:hover {
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    padding: 0.8rem;
    margin: 10px 0;
    width: 100%;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 20px;
    transform: translateY(50%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 15;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-50%')}; /* Show half screen */
    width: 50%; /* Adjusted width */
    height: 100vh;
    background-color: #3a3a3a;
    transition: right 0.3s ease;
    padding: 20px;
    box-sizing: border-box;
    z-index: 11;
    overflow-y: auto; /* Enable scrolling if content overflows */
    flex-direction: column;
    justify-content: flex-start; /* Align items at the top */
    align-items: flex-start; /* Left-align items */
  }
`;

export const NavContact = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;

  .phone-icon {
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top: 20px;
    width: 100%;
    text-align: center;

    &:hover {
      background: #fff;
      color: #808080;
    }
  }
`;
