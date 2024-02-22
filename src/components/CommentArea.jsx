import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Col, Placeholder } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  const fetchComments = () => {
    const myUrl = "https://striveschool-api.herokuapp.com/api/comments/";
    console.log(bookId);
    fetch(myUrl + "/" + bookId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MTY4NDc2YTY0YjAwMTllZjE5ZDciLCJpYXQiOjE3MDg1OTQ4MjAsImV4cCI6MTcwOTgwNDQyMH0.dP8PfQiDUXJctVJmUd7eu4dnGxlD0O2fJvry3_qLXO4",
      },
    })
      .then((response) => {
        if (response.ok) {
          setLoading(false);
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
    <Container>
      <Row>
        <Col>
          <h5 className="text-end">Reviews</h5>
          {loading ? (
            <Row className="d-flex flex-column gy-4">
              <Col>
                <Placeholder animation="glow">
                  <Placeholder xs={5} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
              </Col>
              <Col>
                <Placeholder animation="glow">
                  <Placeholder xs={7} />
                  <Placeholder xs={4} /> <Placeholder xs={6} />
                  <Placeholder xs={8} />
                  <Placeholder xs={8} />
                </Placeholder>
              </Col>
              <Col>
                <Placeholder animation="glow">
                  <Placeholder xs={4} /> <Placeholder xs={4} />
                  <Placeholder xs={5} />
                  <Placeholder xs={4} />
                </Placeholder>
              </Col>
            </Row>
          ) : comments.length === 0 ? (
            <Col>
              <p>No reviews about this book ༼ ༎ຶ ᆺ ༎ຶ༽</p>
              <AddComment bookId={bookId} onCommentAdded={handleCommentAdded} />
            </Col>
          ) : (
            <>
              <Container>
                <Row className="listComments  border-bottom border-light-subtle">
                  <Col>
                    <CommentsList
                      comments={comments}
                      onCommentAdded={handleCommentAdded}
                    />
                  </Col>
                </Row>
                <Col>
                  <AddComment
                    bookId={bookId}
                    onCommentAdded={handleCommentAdded}
                  />
                </Col>
              </Container>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CommentArea;
