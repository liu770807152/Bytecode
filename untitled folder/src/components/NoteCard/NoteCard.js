import React from "react";
import './NoteCard.scss';
import RichTextInput from "./components/RichTextInput";
import NoteCardHeader from "./components/NoteCardHeader";
import CreatedBy from "./components/CreatedBy";
import Accordion from "./components/Accordion";
import CommentCard from "./components/CommentCard";
import NoteCardFooter from "./components/NoteCardFooter";
import NewComment from "./components/NewComment";

class NoteCard extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			isAccordionExpand: false,
			isAddCommentOn: false
		};
		this.handleAccordionClick = this.handleAccordionClick.bind(this);
		this.handleAddCommentClick = this.handleAddCommentClick.bind(this);
	}

	handleAccordionClick() {
		this.setState(prevState =>({
			isAccordionExpand: !prevState.isAccordionExpand
		}));
	}

	
	handleAddCommentClick() {
    this.setState(prevState => ({
      isAddCommentOn: !prevState.isAddCommentOn
    }));
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
				<div className="note-body">
					<div onClick={this.handleAccordionClick}> 
						<Accordion commentnumber="1"></Accordion>
					</div>
					<div className={this.state.isAccordionExpand ? "accordion-collapse" : "accordion-collapse accordion-close"}>
						<CommentCard 
							firstname="Joe"
							lastname="Doe"
							timestamp="Aug 28, 2020 at 12:08 AM GMT+10"
							content="test test test"
						/>
					</div>
				</div>
				<div className={this.state.isAddCommentOn ? "accordion-collapse" : "accordion-collapse accordion-close"}>
					<NewComment />
				</div>
				<div onClick={this.handleAddCommentClick}>
					<NoteCardFooter />
				</div>
			</div>
		);
	}
}

export default NoteCard;