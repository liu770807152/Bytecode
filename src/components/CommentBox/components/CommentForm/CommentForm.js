import React from 'react';
import "./CommentForm.scss";
import Button from '@material-ui/core/Button';

class CommentForm extends React.Component {
  constructor() {
    super();
     this.state = {
        submitted: null
     };
  }

  handleSubmit(event) { 
    event.preventDefault();   // prevents page from reloading on submit
    let author = "Joe Doe";
    //let author = this.author;
    let content = this.content;
    let createdTimeStamp = new Date().toString().slice(0,33);
    this.props.addComment(author, content.value, createdTimeStamp);
    this.setState({submitted: true});
    //this.props.addComment(author.value, content.value, createdTimeStamp );
  }

  render() {
    return (
      <form className="comment-form-container" onSubmit={this.handleSubmit.bind(this)}>
        <textarea className="comment-form-input" placeholder="Start typing comment..." required ref={(textarea) => this.content = textarea}></textarea>
        <div className="comment-form-controls">
          <button type="submit" className="comment-form-button__save">Save</button>
          {/* <button type="submit">Cancel</button> */}
        </div>
      </form>
      // <div>
      //   {this.state.submitted ? null : (
      //     <form className="comment-form-container" onSubmit={this.handleSubmit.bind(this)}>
      //       <textarea className="comment-form-input" placeholder="Start typing comment..." required ref={(textarea) => this.content = textarea}></textarea>
      //       <div className="comment-form-controls">
      //         <button type="submit">Save</button>
      //         {/* <button type="submit">Cancel</button> */}
      //     </div>
      //   </form>
      //   )}
      // </div>
      
      
    );
  }
} 

export default CommentForm;