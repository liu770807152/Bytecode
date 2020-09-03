import React from 'react';
import "../Companybasic/Companybasic.scss";
import IconNote from "../Companybasic/icons64px/note.svg";
import IconMail from "../Companybasic/icons64px/mail.svg";
import IconCall from "../Companybasic/icons64px/call.svg";
import IconLog from "../Companybasic/icons64px/log.svg";
import IconTask from "../Companybasic/icons64px/task.svg";
import IconMeeting from "../Companybasic/icons64px/meeting.svg";
import IconCompany from "../Companybasic/icons64px/company.svg";
import IconProfile from "../Companybasic/icons64px/profile.svg"


const Companybasic = () => (
    <div className="company_information">
        <div className="company_basic">
            <button className="back-to-list">
                <div className="company_text"> Companies </div>
                <img className="icon_company" src={IconCompany} alt="Company" />
            </button>
            <div className="company_header">
                <img className="profile_icon" src={IconProfile} alt="Profile" />
                <div className="company_name"> HubSpot, Inc. </div>
                <a className="company_link" href="https://www.hubspot.com"> hubspot.com</a>
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
        <div className="about_company">
            <h3> About this company</h3>
            <div className="companyname_box">
                <div className="key_name"> Name </div>
                <div className="value_name"> HubSpot, Inc. </div>
            </div>
            <div className="company-domain-name_box">
                <div className="key_name"> Company domain name </div>
                <div className="value_name"> hubspot.com </div>
            </div>
            <div className="industry_box">
                <div className="key_name"> Industry </div>
                <div className="value_name"> Computer Software </div>
            </div>
            <div className="phone-number_box">
                <div className="key_name"> Phone number </div>
                <div className="value_name">  +1 888-482-7768 </div>
            </div>
            <div className="company-owner_box">
                <div className="key_name"> Company owner </div>
                <div className="value_name">  blank </div>
            </div>
            <div className="type_box">
                <div className="key_name"> Type </div>
                <div className="value_name">  blank </div>
            </div>
            <div className="city_box">
                <div className="key_name"> City </div>
                <div className="value_name">  Cambridge </div>
            </div>
            <div className="region_box">
                <div className="key_name"> State/Region </div>
                <div className="value_name">  MA </div>
            </div>
            <div className="postol_box">
                <div className="key_name"> Postal code </div>
                <div className="value_name">  02141 </div>
            </div>
            <div className="employee-num_box">
                <div className="key_name"> Number of employees </div>
                <div className="value_name">  5,000 </div>
            </div>
            <div className="revenue_box">
                <div className="key_name"> Annual revenue </div>
                <div className="value_name">  $250,000,000.00 </div>
            </div>
            <div className="timezone_box">
                <div className="key_name"> Time zone </div>
                <div className="value_name">  America/New_York </div>
            </div>
            <div className="description_box">
                <div className="key_name"> Description </div>
                <div className="value_name">  HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service.1 </div>
            </div>
            <div className="linkedin_box">
                <div className="key_name"> LinkedIn company page </div>
                <div className="value_name">  https://www.linkedin.com/company/hubspot </div>
            </div>
            <button className="view-all-properties">View all properties </button>
            <button className="view-property-history">View property history </button>
        </div>
    </div>
);

export default Companybasic;