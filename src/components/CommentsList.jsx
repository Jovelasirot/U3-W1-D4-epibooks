import React from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments, onCommentAdded }) => {
  return (
    <div>
      {comments.map((comment) => (
        <SingleComment
          key={comment._id}
          comment={comment}
          onCommentAdded={onCommentAdded}
        />
      ))}
    </div>
  );
};

export default CommentsList;
