import React from 'react';
import '../navBar/navBar.scss';
import Logo from '../navBar/logo.png';
import { FiHome } from "react-icons/fi";

const navBar = () => (
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

export default navBar;