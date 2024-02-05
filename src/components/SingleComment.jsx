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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZTg5ZGUwODVmYTAwMTk2MzFhNWYiLCJpYXQiOjE3MDcxNDM0MjYsImV4cCI6MTcwODM1MzAyNn0.Jw7gWP0H0XxT73-fwPubkwbjBtXiJhtxpPYJKbmEydM",
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
