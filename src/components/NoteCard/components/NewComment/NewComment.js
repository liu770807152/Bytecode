import React from 'react';
import './NewComment.scss';
import RichTextInput from '../RichTextInput';

const NewComment = () => (
	<div class="new-comment-container">
		<RichTextInput 
			className="new-comment-input"
			placeholder="Start typing a comment..."
		/>
		<div className="new-comment-controls">
			<button>Save</button>
			<button>Cancel</button>
		</div>
	</div>
);

export default NewComment;