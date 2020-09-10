import React from './node_modules/react';
import "./Contactlist.scss";
import NavBar from '../navbar/NavBar';
import { NavLink } from './node_modules/react-router-dom';


const ContactList = () => (
    <div>
        <header>
            <NavBar />
        </header>
        <div className="Contacts">
            <h2>Contacts</h2>
            <ul className="contacts-list">
                <li className="navbar-contacts"><NavLink activeClassName="active" to="/contacts/main"><button>Brian Halligan</button></NavLink></li>
            </ul>
        </div>
    </div>
);

export default ContactList;