import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import CommentArea from "./CommentArea";

const BookList = ({ partTittle, allFantasy, searchQuery }) => {
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleSelected = (bookId) => {
    setSelectedBookId(bookId === selectedBookId ? null : bookId);
  };

  const filteredBooks = allFantasy.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <>
      <Container className="pt-4 ">
        <Row className="justify-content-end"></Row>
        <h1 className="ms-2">{partTittle}</h1>
        <Row>
          <Col>
            <Row className="justify-content-center mt-3 gy-3 mx-3 mx-md-0 listBooks">
              {filteredBooks.length === 0 ? (
                <Col>
                  <ListGroup>
                    <ListGroup.Item className="bg-light bg-opacity-10 text-center text-dark">
                      Book not found &#40;˚ ˃̣̣̥⌓˂̣̣̥ &#41;
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              ) : (
                filteredBooks.map((book) => (
                  <Col xs={12} md={6} lg={6} key={book.asin}>
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
          <Col xs={12} lg={6}>
            {selectedBookId && <CommentArea bookId={selectedBookId} />}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default BookList;
