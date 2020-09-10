import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import CommentCard from "./components/CommentCard";
import CommentForm from "./components/CommentForm";
//import CommentList from "./components/CommentList";
import "./CommentBox.scss";


class CommentBox extends React.Component {
  constructor() {
    super();
    
    this.state = {
      showComments: false,
      showCommentForm: false,
      comments: [
        //{id: 1, author: "Joe Doe", content: "This is my first comment on this note", createdTimeStamp: "Aug 28, 2020 at 12:08 AM GMT+10"}
        // firstname="Joe"
        // lastname="Doe"
      ]
    };
    this.handleShowCommentFormClick = this.handleShowCommentFormClick.bind(this);
  }

  handleShowCommentFormClick() {
    this.setState(prevState =>({
      showCommentForm: !prevState.showCommentForm
    }));
  }

  
  addComment(author, content, createdTimeStamp) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      content,
      createdTimeStamp
    };
    this.setState({ comments: this.state.comments.concat([comment]) }); 
  }
  
  handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }
  
  getComments() {    
    return this.state.comments.map((comment) => { 
      return (
        <CommentCard 
          author={comment.author} 
          content={comment.content} 
          createdTimeStamp={comment.createdTimeStamp}
          key={comment.id} />
      ); 
    });
  }
  
  getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else {
      return `Comments (${commentCount}) `;
    }
  }
  
  render () {
    const comments = this.getComments();
    let commentNodes;
    let buttonText = <FontAwesomeIcon icon={faChevronRight} />;
    
    if (this.state.showComments) {
      buttonText = <FontAwesomeIcon icon={faChevronDown} />;
			commentNodes = <div className="comment-list">{comments}</div>;
    }
    
    return(
      <div>
        <div className="comment-box-top">
          <a 
            onClick={this.handleClick.bind(this)}
            className="accordion-label"
          >
            {buttonText} {this.getCommentsTitle(comments.length)} 
          </a>
          {commentNodes}
        </div>
        <div className={this.state.showCommentForm ? "accordion-collapse" : "accordion-collapse accordion-close"}>
          <CommentForm addComment={this.addComment.bind(this)}/>
        </div>
        
        <div className="add-comment-container">
          <div className="add-comment-icon">
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <button onClick={this.handleShowCommentFormClick.bind(this)} className="add-comment-button">Add Comment</button>
        </div>
      </div>  
    );
  } 
} 


export default CommentBox;
