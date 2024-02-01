import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SingleBook from "./SingleBook";
import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class BookList extends Component {
  state = {
    searchValue: "",
  };

  render() {
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
          <Row
            className="justify-content-center mt-3 g-3 mx-3 mx-md-0"
            xs={1}
            md={2}
            lg={3}
            xl={4}
            xxl={5}
          >
            {this.props.allFantasy
              .filter((book) =>
                book.title
                  .toLowerCase()
                  .includes(this.state.searchValue.toLowerCase())
              )
              .map((book) => (
                <Col xs={12} md={4} lg={3} key={book.asin}>
                  <SingleBook oneBook={book} />
                </Col>
              ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default BookList;
