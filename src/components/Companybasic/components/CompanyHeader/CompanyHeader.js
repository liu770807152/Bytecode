import React from 'react';
import "./CompanyHeader.scss";
import IconProfile from "../../../../img/Company/profile.svg";
import IconCompany from "../../../../img/Company/company.svg"

const CompanyHeader = () => (
  <div className="company_basic">
    <button className="back-to-list">
      <div className="company_text"> Companies </div>
      <div>
      <img className="icon_company" src={IconCompany} alt="Company" />
      </div>
    </button>
    <div className="company_header">
      <img className="profile_icon" src={IconProfile} alt="Profile" />
      <div className="company_name"> HubSpot, Inc. </div>
      <a className="company_link" href="https://www.hubspot.com"> hubspot.com</a>
    </div>
  </div>
);


export default CompanyHeader;