import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { singleBook } = this.props;
    const { selected } = this.state;
    const { bookCategory } = this.props;

    return (
      <Container className="pt-4">
        <h1 className="text-center">Random book from: {bookCategory} </h1>
        <Row className="justify-content-center" sm={2} md={3}>
          <Col id={singleBook.asin}>
            <Card
              className={`h-100 bg-dark text-light border ${
                selected ? "border-white" : "border-0"
              }`}
            >
              <Card.Img
                variant="top"
                src={singleBook.img}
                onClick={this.toggleSelected}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="flex-grow-1   text-center fw-semibold">
                  {singleBook.title}
                </Card.Title>
                <Card.Text className="mt-2 text-end">
                  Category: {singleBook.category.toUpperCase()}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
