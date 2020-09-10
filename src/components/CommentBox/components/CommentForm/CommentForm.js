import React from 'react';
import "./CommentForm.scss";

class CommentForm extends React.Component {

  handleSubmit(event) { 
    event.preventDefault();   // prevents page from reloading on submit
    let author = "Joe Doe";
    //let author = this.author;
    let content = this.content;
    let createdTimeStamp = new Date().toString().slice(0,33);
    this.props.addComment(author, content.value, createdTimeStamp);
    //this.props.addComment(author.value, content.value, createdTimeStamp );
  }

  render() {
    return (
      <form className="comment-form-container" onSubmit={this.handleSubmit.bind(this)}>
        <textarea className="comment-form-input" placeholder="Start typing comment..." required ref={(textarea) => this.content = textarea}></textarea>
        <div className="comment-form-controls">
          <button type="submit">Save</button>
          {/* <button type="submit">Cancel</button> */}
        </div>
      </form>
    );
  }
} 

export default CommentForm;