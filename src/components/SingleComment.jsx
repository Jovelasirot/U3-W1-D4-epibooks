import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <div className="bg-warning d-flex justify-content-between">
      <div>{comment.comment}</div>
      <div>{comment.rate} stars</div>
    </div>
  );
};

export default SingleComment;
