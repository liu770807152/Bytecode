import React from "react";
import './NotesTimeLine.scss';
import NoteModal from '../NoteModal';
import NoteCard from '../NoteCard';
import Modal from 'react-modal';
import Draggable from 'react-draggable';


class NotesTimeLine extends React.Component {
	constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
	}
	
	render(){
		return (
			<div className="timeline-container">
				<div>
					<button onClick={this.handleOpenModal}>Create Note</button>
				</div>
					<Modal
						className="note-modal"
						isOpen={this.state.showModal}
					>
						<Draggable>
							<div>
								<div className="note-modal__header">
									<button onClick={this.handleCloseModal}>Close</button>
								</div>
								<NoteModal />
							</div>
						</Draggable>
					</Modal>
				<NoteCard />
			</div>
		);
	}
}

export default NotesTimeLine;