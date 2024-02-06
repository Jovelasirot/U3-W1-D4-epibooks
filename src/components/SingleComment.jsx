import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Row } from "react-bootstrap";
import Stars from "./Stars";

const SingleComment = ({ comment, onCommentAdded }) => {
  const handleDelete = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + comment._id,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZTg5ZGUwODVmYTAwMTk2MzFhNWYiLCJpYXQiOjE3MDcxNDM0MjYsImV4cCI6MTcwODM1MzAyNn0.Jw7gWP0H0XxT73-fwPubkwbjBtXiJhtxpPYJKbmEydM",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Comment deleted");
          onCommentAdded();
        } else throw new Error();
      })
      .catch((err) => {
        alert("Something went wrong", err);
      });
  };

  return (
    <Col xs={12}>
      <Row className="glass text-light">
        <Col xs={8} className="p-2 ">
          <Stars Stars={comment.rate} />
          <p>{comment.comment}</p>
          <span className="commentAuthor">By - {comment.author}</span>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <Button variant="info" className="btn" onClick={handleDelete}>
            <i className="bi bi-trash-fill text-light"></i>
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default SingleComment;
