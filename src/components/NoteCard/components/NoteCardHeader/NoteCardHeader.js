import React from 'react';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NoteCardHeader.scss';


class NoteCardHeader extends React.Component {
	render() {
		return (
			<div className="note__header-container">
				<div className="note__header-left">
					<FontAwesomeIcon icon={faEdit} />
					<span className="note-header-title">Note</span>
				</div>
				<div className="note__header-right">
					{this.props.timestamp}
				</div>
			</div>
		)
	}
}
	

	
export default NoteCardHeader;