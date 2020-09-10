import React from 'react';
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NoteCardFooter.scss";

const NoteCardFooter = () => (
	<div>
		<div className="add-comment-container">
			<div className="add-comment-icon">
				<FontAwesomeIcon icon={faCommentDots} />
			</div>
			<button className="add-comment-button">Add Comment</button>
		</div>
	</div>
)


export default NoteCardFooter;