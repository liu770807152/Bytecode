import React from 'react';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Accordion.scss";

class Accordion extends React.Component {
	render() {
		return (
			<div className="accordion">
				<FontAwesomeIcon icon={faChevronDown} />
				<span className="accordion-title">Comments ({this.props.commentnumber})</span>
			</div>
		)
	}
}

export default Accordion;