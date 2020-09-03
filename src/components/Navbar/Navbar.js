import React from 'react';
import '../Navbar/Navbar.scss';
import Logo from './logo.png';
import { FiHome } from "react-icons/fi";

const Navbar = () => (
    <div className="navbar">
        <img className="logo" src={Logo} alt="Logo" />
        <div className = "navbar-buttons">
        <button className = "navbar-contacts"> Contacts </button>
        <button className = "navbar-companies"> Companies </button>
        <button className = "navbar-login"> Logout </button>
        <button className = "home-page"> <FiHome/> </button>
        </div>
    </div>
);

export default Navbar;