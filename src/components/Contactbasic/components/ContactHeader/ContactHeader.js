import React from 'react';
import "./ContactHeader.scss";
import IconProfile from "../../../../img/Contact/profile.png";

const ContactHeader = () => (
    <div className="contact_header">
    <img className="profile_icon" src={IconProfile} alt="Profile" />
    <div className="contact_name"> Brian Halligan </div>
    <div className="contact_position"> CEO at HubSpot, Inc. </div>
</div>
  );


export default ContactHeader;