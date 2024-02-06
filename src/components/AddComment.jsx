import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddComment = ({ bookId }) => {
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "1",
    elementId: bookId,
  });
  const handleComment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZTg5ZGUwODVmYTAwMTk2MzFhNWYiLCJpYXQiOjE3MDcxNDM0MjYsImV4cCI6MTcwODM1MzAyNn0.Jw7gWP0H0XxT73-fwPubkwbjBtXiJhtxpPYJKbmEydM",
          },
          body: JSON.stringify(newComment),
        }
      );

      if (response.ok) {
        setNewComment({
          comment: "",
          rate: "1",
          elementId: bookId,
        });
        alert("Comment added correctly");
      } else {
        throw new Error("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Something went wrong");
    }
  };

  return (
    <Form className="mt-4" onSubmit={handleComment}>
      <Form.Group className="mb-3">
        <Form.Label>Rate this book</Form.Label>
        <Form.Select
          aria-label="Default select example"
          required
          onChange={(e) =>
            setNewComment({
              ...newComment,
              rate: e.target.value,
            })
          }
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Write your opinion here:</Form.Label>
        <Form.Control
          value={newComment.comment}
          required
          onChange={(e) => {
            setNewComment({
              ...newComment,
              comment: e.target.value,
            });
          }}
        />
      </Form.Group>
      <div className="text-end">
        <Button variant="info text-light " className="mb-4" type="submit">
          <i className="bi bi-send"></i>
        </Button>
      </div>
    </Form>
  );
};

export default AddComment;
