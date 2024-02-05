import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SingleBook from "./SingleBook";
import { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchValue: "",
    selected: null,
  };

  handleSelected = (newVal) => {
    this.setState({ selected: newVal });
  };

  render() {
    const filteredBooks = this.props.allFantasy.filter((book) =>
      book.title
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase().trim())
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
                  value={this.state.searchValue}
                  onChange={(e) => {
                    this.setState({ searchValue: e.target.value });
                  }}
                />
              </Form>
            </Col>
          </Row>
          <h1 className="ms-2">{this.props.partTittle}</h1>
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
                        handleSelected={this.handleSelected}
                      />
                    </Col>
                  ))
                )}
              </Row>
            </Col>
            <Col>
              {this.state.selected && (
                <CommentArea bookId={this.state.selected.asin} />
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default BookList;
