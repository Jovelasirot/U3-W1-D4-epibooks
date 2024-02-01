import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddComment extends Component {
  state = {
    commentLayout: {
      comment: "",
      rate: "1",
      elementId: this.props.bookId,
      author: "joe@gigi.com",
    },
  };

  handleComment = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmU2MzE4N2U1YzAwMTgxNGM1ZjAiLCJpYXQiOjE3MDU2NTE4MTEsImV4cCI6MTcwNjg2MTQxMX0.MukAz4w7SSYtD1Jp_m3qP72gpThtgJ7mQZy-6TUbW34",
        "content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(this.state.commentLayout),
    })
      .then((response) => {
        if (response.ok) {
          return alert("Comment added correctly");
        } else throw new Error();
      })
      .catch((err) => {
        alert("Something went wrong", err);
      });
  };

  render() {
    return (
      <Form className="mt-4" onSubmit={this.handleComment}>
        <Form.Group className="mb-3">
          <Form.Label>Rate this book</Form.Label>
          <Form.Select
            aria-label="Default select example"
            required
            onChange={(e) => {
              this.setState({
                commentLayout: {
                  ...this.state.commentLayout,
                  rate: e.target.value,
                },
              });
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Write your opinion here</Form.Label>
          <Form.Control
            value={this.state.commentLayout.comment}
            required
            onChange={(e) => {
              this.setState({
                commentLayout: {
                  ...this.state.commentLayout,
                  comment: e.target.value,
                },
              });
            }}
          />
        </Form.Group>
        <Button variant="info text-light" className="mb-4" type="submit">
          Send
        </Button>
      </Form>
    );
  }
}

export default AddComment;
