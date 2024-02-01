import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SingleBook from "./SingleBook";
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

class BookList extends Component {
  state = {
    searchValue: "",
  };

  render() {
    const filteredBooks = this.props.allFantasy.filter((book) =>
      book.title
        .trim()
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase())
    );

    return (
      <>
        <Container className="py-4">
          <Form>
            <Row className="justify-content-end">
              <Col xs="auto">
                <Form.Control
                  className="bg-dark text-light border border-light  placeHolder"
                  type="text"
                  placeholder="Find a book"
                  value={this.state.searchValue}
                  onChange={(e) => {
                    this.setState({ searchValue: e.target.value });
                  }}
                />
              </Col>
            </Row>
          </Form>
        </Container>
        <Container>
          <Row className="justify-content-center mt-3 g-3 mx-3 mx-md-0 ">
            {filteredBooks.length === 0 ? (
              <Col xs={12}>
                <ListGroup>
                  <ListGroup.Item className="bg-dark text-danger">
                    Book not found
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            ) : (
              filteredBooks.map((book) => (
                <Col
                  xs={12}
                  md={6}
                  lg={4}
                  xl={3}
                  xxl={3}
                  key={book.asin}
                  className="listBooks"
                >
                  <SingleBook oneBook={book} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </>
    );
  }
}
export default BookList;
