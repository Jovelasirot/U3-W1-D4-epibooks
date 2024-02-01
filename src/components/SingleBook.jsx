import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        className={
          this.state.selected
            ? "boderd border-info border-2 h-100 bg-dark text-light"
            : "h-100 bg-dark text-light"
        }
      >
        <Card.Img
          variant="top"
          src={this.props.oneBook.img}
          style={{ height: "400px" }}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="flex-grow-1  fw-semibold">
            {this.props.oneBook.title}
          </Card.Title>
          <Card.Text className="text-end">
            {this.props.oneBook.price} $
          </Card.Text>
          <div className="d-flex justify-content-between ">
            <Button
              variant="success"
              onClick={() => {
                this.setState({
                  selected: !this.state.selected,
                });
              }}
            >
              Add to Cart
            </Button>
            <Button variant="secondary">Buy Now</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
