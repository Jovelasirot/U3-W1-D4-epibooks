import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SingleBook from "./SingleBook";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import CommentArea from "./CommentArea";

const BookList = ({ partTittle, allFantasy }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleSelected = (newVal) => {
    setSelectedBookId(newVal === selectedBookId ? null : newVal);
  };

  const filteredBooks = allFantasy.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  return (
    <>
      <Container className="pt-4 ">
        <Row className="justify-content-end">
          <Col xs="auto">
            <Form>
              <Form.Control
                className="bg-dark text-light border border-light  placeHolder"
                type="text"
                placeholder="Find a book"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            </Form>
          </Col>
        </Row>
        <h1 className="ms-2">{partTittle}</h1>
        <Row>
          <Col>
            <Row className="justify-content-center mt-3 gy-3 mx-3 mx-md-0 listBooks">
              {filteredBooks.length === 0 ? (
                <Col>
                  <ListGroup>
                    <ListGroup.Item className="bg-dark text-danger">
                      Book not found &#40;˚ ˃̣̣̥⌓˂̣̣̥ &#41;
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              ) : (
                filteredBooks.map((book) => (
                  <Col xs={6} key={book.asin}>
                    <SingleBook
                      dataBooks={book}
                      bookId={book.asin}
                      isSelected={selectedBookId === book.asin}
                      handleSelected={handleSelected}
                    />
                  </Col>
                ))
              )}
            </Row>
          </Col>
          <Col>{selectedBookId && <CommentArea bookId={selectedBookId} />}</Col>
        </Row>
      </Container>
    </>
  );
};
export default BookList;
