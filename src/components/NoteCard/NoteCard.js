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
      open: false
    }
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
					<div onClick={function(){this.setState({open:!this.state.open})}.bind(this)}> 
						<Accordion commentnumber="1"></Accordion>
					</div>
					<div className={this.state.open ? "accordion-collapse" : "accordion-collapse accordion-close"}>
						<CommentCard 
							firstname="Joe"
							lastname="Doe"
							timestamp="Aug 28, 2020 at 12:08 AM GMT+10"
							content="test test test"
						/>
					</div>
				</div>
				<div className={this.state.open ? "accordion-collapse" : "accordion-collapse accordion-close"}>
					<NewComment />
				</div>
				<div 
					onClick={function(){this.setState({open:!this.state.open})}.bind(this)}
				>
					<NoteCardFooter />
				</div>
			</div>
		);
	}
}

export default NoteCard;