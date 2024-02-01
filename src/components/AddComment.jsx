import React, { Component } from "react";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      rate: 1,
    };
  }

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleRateChange = (e) => {
    this.setState({ rate: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { comment, rate } = this.state;
    const { bookId } = this.props;
    // Perform POST request to add comment to the book with bookId
    // Use comment and rate
    console.log("Submit comment:", comment, "Rate:", rate);
    // Reset form fields
    this.setState({ comment: "", rate: 1 });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            className="form-control"
            id="comment"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rate">Rate (1-5)</label>
          <input
            type="number"
            className="form-control"
            id="rate"
            min="1"
            max="5"
            value={this.state.rate}
            onChange={this.handleRateChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Comment
        </button>
      </form>
    );
  }
}

export default AddComment;
