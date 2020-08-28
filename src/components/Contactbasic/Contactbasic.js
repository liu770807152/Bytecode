import React from 'react';
import "../Contactbasic/Contactbasic.scss";
import IconNote from "../Contactbasic/icons64px/note.png";
import IconMail from "../Contactbasic/icons64px/mail.png";
import IconCall from "../Contactbasic/icons64px/call.png";
import IconLog from "../Contactbasic/icons64px/log.png";
import IconTask from "../Contactbasic/icons64px/task.png";
import IconMeeting from "../Contactbasic/icons64px/meeting.png";
import IconContact from "../Contactbasic/icons64px/contact.png";
import IconProfile from "../Contactbasic/icons64px/profile.png"


const Contactbasic = () => (
    <div className="contact_information">
        <div className="contact_basic">
            <button className="back-to-list">
                <div className="contact_text"> Contacts </div>
                <img className="icon_contact" src={IconContact} alt="Contact" />
            </button>
            <div className="contact_header">
                <img className="profile_icon" src={IconProfile} alt="Profile" />
                <div className="contact_name"> Brian Halligan </div>
                <div className="contact_position"> CEO at HubSpot, Inc. </div>
            </div>
            <div className="activity_list">
                <div className="activity_item">
                    <button className="icon_button"> <img className="icon_note" src={IconNote} alt="Note" /></button>
                    <div className="activity_name"> Note </div>
                </div>
                <div className="activity_item">
                    <button className="icon_button"> <img className="icon_mail" src={IconMail} alt="Mail" /></button>
                    <div className="activity_name"> Email </div>
                </div>
                <div className="activity_item">
                    <button className="icon_button"> <img className="icon_call" src={IconCall} alt="Call" /></button>
                    <div className="activity_name"> Call </div>
                </div>
                <div className="activity_item">
                    <button className="icon_button"> <img className="icon_log" src={IconLog} alt="Log" /></button>
                    <div className="activity_name"> Log </div>
                </div>
                <div className="activity_item">
                    <button className="icon_button"> <img className="icon_task" src={IconTask} alt="Task" /></button>
                    <div className="activity_name"> Task </div>
                </div>
                <div className="activity_item">
                    <button className="icon_button"> <img className="icon_meeting" src={IconMeeting} alt="Meeting" /></button>
                    <div className="activity_name"> Meet </div>
                </div>
            </div>
        </div>
        <div className="about_contact">
            <h3> About this contact</h3>
            <div className="firstname_box">
                <div className="key_name"> First name </div>
                <div className="value_name"> Brian </div>
            </div>
            <div className="lastname_box">
                <div className="key_name"> Last name </div>
                <div className="value_name"> Halligan </div>
            </div>
            <div className="email_box">
                <div className="key_name"> Email </div>
                <div className="value_name"> bh@hubspot.com </div>
            </div>
            <div className="phone-number_box">
                <div className="key_name"> Phone number </div>
                <div className="value_name">  blank </div>
            </div>
            <div className="contact-number_box">
                <div className="key_name"> Contact owner </div>
                <div className="value_name">  blank </div>
            </div>
            <div className="lifecycles-tage_box">
                <div className="key_name"> Lifecycle stage </div>
                <div className="value_name">  Lead </div>
            </div>
            <div className="lead-status_box">
                <div className="key_name"> Lead status </div>
                <div className="value_name">  blank </div>
            </div>
            <div className="message_box">
                <div className="key_name"> Message </div>
                <div className="value_name">  blank </div>
            </div>
            <div className="company-name_box">
                <div className="key_name"> Company name </div>
                <div className="value_name">  blank </div>
            </div>
            <button className="view-all-properties">View all properties </button>
            <button className="view-property-history">View property history </button>
        </div>
        <div className="website_activity">
            <h3> Website activity</h3>
            <p> Website activity shows you how many times a contact has visited your site and viewed your pages. </p>
        </div>
    </div>
);

export default Contactbasic;