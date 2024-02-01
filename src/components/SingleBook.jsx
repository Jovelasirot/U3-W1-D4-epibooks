import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import CommentArea from "./CommentArea";
import { Container } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          className={
            this.state.selected
              ? "bordered border-warning h-100 bg-dark text-light z-0"
              : "h-100 bg-dark text-light z-0"
          }
        >
          <Card.Img
            variant="top"
            src={this.props.dataBooks.img}
            style={{ height: "400px" }}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className="flex-grow-1  fw-semibold">
              {this.props.dataBooks.title}
            </Card.Title>
            <Container>
              {this.state.selected && (
                <CommentArea bookId={this.props.dataBooks.asin} />
              )}
            </Container>
            <Card.Text className="text-end">
              {this.props.dataBooks.price} $
            </Card.Text>

            <div className="d-flex justify-content-between ">
              <Button
                variant={this.state.selected ? "warning" : "success"}
                onClick={() => {
                  this.setState({
                    selected: !this.state.selected,
                  });
                }}
              >
                {this.state.selected ? "Hide Reviews" : "Show Reviews"}
              </Button>
              <Button variant="secondary">Buy Now</Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
