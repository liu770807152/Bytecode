import React from 'react';
import CommentCard from "../CommentCard";

const comments = [
  {id: 1, author: "Pete Hunt", createdDate: "Aug 28, 2020 at 12:08 AM GMT+10", content: "This is one comment"},
  {id: 2, author: "Jordan Walke", createdDate: "Aug 28, 2020 at 12:08 AM GMT+10", content: "This is another comment"}
];

const CommentList = () => (
 <div className="commentList">
	 {comments.map(commentItem => (
			<CommentCard
				author={commentItem.author}
				createdDate={commentItem.createdDate}
				content={commentItem.content}
			/>
  	))}
</div>

)

export default CommentList;