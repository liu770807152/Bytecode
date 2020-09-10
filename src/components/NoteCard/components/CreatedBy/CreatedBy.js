import React from 'react';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CreatedBy.scss";



const CreatedBy = () => (
	<div className="createdby-container">
		<div className="createdby-user-icon">
			<FontAwesomeIcon icon={faUserCircle} />
		</div>
		<span className="createdby-info">Joe Doe left a note</span>
	</div>
);

export default CreatedBy;