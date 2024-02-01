import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";

const SingleComment = ({ comment }) => {
  const handleDelete = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + comment._id,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmU2MzE4N2U1YzAwMTgxNGM1ZjAiLCJpYXQiOjE3MDU2NTE4MTEsImV4cCI6MTcwNjg2MTQxMX0.MukAz4w7SSYtD1Jp_m3qP72gpThtgJ7mQZy-6TUbW34",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return alert("Comment deleted");
        } else throw new Error();
      })
      .catch((err) => {
        alert("Something went wrong", err);
      });
  };

  return (
    <div className="bg-warning d-flex justify-content-between border border-1 border-dark">
      <div>{comment.comment}</div>
      <div>{comment.rate} stars</div>
      <Button variant="danger" className="btn-sm " onClick={handleDelete}>
        <i className="bi bi-trash-fill"></i>
      </Button>
    </div>
  );
};

export default SingleComment;
