import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { Col } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  const fetchComments = () => {
    const myUrl = "https://striveschool-api.herokuapp.com/api/comments/";
    console.log(bookId);
    fetch(myUrl + "/" + bookId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZTg5ZGUwODVmYTAwMTk2MzFhNWYiLCJpYXQiOjE3MDcxNDM0MjYsImV4cCI6MTcwODM1MzAyNn0.Jw7gWP0H0XxT73-fwPubkwbjBtXiJhtxpPYJKbmEydM",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch comments");
        }
      })
      .then((data) => {
        setComments(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };

  const handleCommentAdded = () => {
    fetchComments();
  };

  return (
    <Container className="z-2">
      <Row>
        <Col>
          <h5 className="text-end">Comments</h5>
          <ListGroup>
            <CommentsList
              comments={comments}
              onCommentAdded={handleCommentAdded}
            />
            <AddComment bookId={bookId} onCommentAdded={handleCommentAdded} />
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentArea;
