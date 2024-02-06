import React from "react";
import SingleComment from "./SingleComment";
import { Row } from "react-bootstrap";

const CommentsList = ({ comments, onCommentAdded }) => {
  return (
    <Row className="g-2">
      {comments.map((comment) => (
        <SingleComment
          key={comment._id}
          comment={comment}
          onCommentAdded={onCommentAdded}
        />
      ))}
    </Row>
  );
};

export default CommentsList;
