import React from "react";
import './NoteCard.scss';
import RichTextInput from "./components/RichTextInput";
import NoteCardHeader from "./components/NoteCardHeader";
import CreatedBy from "./components/CreatedBy";
import CommentBox from "../CommentBox";

class NoteCard extends React.Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div className="note-card-container">
				<NoteCardHeader 
					timestamp="Aug 28, 2020 at 12:08 AM GMT+10"
				/>
				<div className="note-text-input">
					<RichTextInput 
						content="This is a sample note..."
					/>
				</div>
				<div>
					<CreatedBy />
				</div>
				<CommentBox />
			</div>
		);
	}
}

export default NoteCard;