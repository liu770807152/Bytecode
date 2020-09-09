import React from "react";
import './NoteModal.scss';
import RichTextInput from "../NoteCard/components/RichTextInput";


class NoteModal extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

	render() {
		return (
			<div>
				<div className="note-card-container">
					<div className="new-note-text-input">
						<RichTextInput 
							placeholder="Start typing to leave a note..."
						/>
					</div>
					<div className="note-container-footer">
						<button>Save note</button>
						<input type="checkbox" />
						<p>Create a task to follow up</p>
					</div>
				</div>
			</div>
		);
	}
}

export default NoteModal;