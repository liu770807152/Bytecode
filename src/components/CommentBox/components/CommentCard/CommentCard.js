import React from 'react';
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CommentCard.scss';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

class CommentCard extends React.Component {
  constructor() {
    super();
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){}

  render () {
    return(
      <div className="comment-container">
        <div className="comment-actions">
          <Tooltip title="Edit" placement="top" arrow>
            <button className="comment-card-action-button"><FontAwesomeIcon icon={faPen} /></button>
          </Tooltip>
          <Tooltip title="Delete" placement="top" arrow>
            <button className="comment-card-action-button"><FontAwesomeIcon icon={faTrashAlt} /></button>
          </Tooltip>
        </div>
				<div className="comment-container-header">
					<div className="comment-container-header__left">
						<FontAwesomeIcon icon={faUserCircle} />
						<p className="comment-detail"><b>{this.props.author}</b> left a comment</p>
          </div>
					<div className="note__header-right">
            {this.props.createdTimeStamp}
					</div>
				</div>
				<div className="comment-detail">
          <p> { this.props.content }</p>
				</div>
			</div>
    );
  }
  deleteComment() {
    alert("-- DELETE Comment Functionality COMMING SOON...");
  }
}

export default CommentCard;
