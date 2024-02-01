import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

const BookList = ({ allFantasy }) => {
  const [inputBook, setBook] = useState("");

  const handleSearch = (e) => {
    setBook(e.target.value);
  };

  const filteredBooks = allFantasy.filter((book) =>
    book.title.toLowerCase().includes(inputBook.toLowerCase())
  );

  return (
    <Container className="my-4">
      <h1>List of Books</h1>
      <div className="d-flex justify-content-end mb-3">
        <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                className="bg-dark text-light border border-light  placeHolder"
                type="text"
                placeholder="Find a book"
                value={inputBook}
                onChange={handleSearch}
              />
            </Col>
          </Row>
        </Form>
      </div>
      <Row>
        <Col className="listBooks">
          <ListGroup>
            {filteredBooks.length === 0 ? (
              <ListGroup.Item className="bg-dark text-danger">
                Book not found
              </ListGroup.Item>
            ) : (
              filteredBooks.map((book) => (
                <ListGroup.Item key={book.asin} className="bg-dark text-light">
                  {book.title}
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
