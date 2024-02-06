import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleBook = ({ dataBooks, handleSelected, bookId, isSelected }) => {
  const [cardSelected, setCardSelected] = useState(false);

  return (
    <>
      <Card className={isSelected ? "border border-warning " : "shadow"}>
        <Card.Img
          variant="top"
          src={dataBooks.img}
          style={{ height: "400px" }}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="flex-grow-1  fw-semibold">
            {dataBooks.title}
          </Card.Title>
          <Card.Text className="text-end">{dataBooks.price} $</Card.Text>

          <div className="d-flex justify-content-between ">
            <Button
              variant={isSelected ? "warning" : "success"}
              onClick={() => {
                handleSelected(bookId);
                setCardSelected(!cardSelected);
              }}
            >
              {isSelected ? "Hide Reviews" : "Show Reviews"}
            </Button>
            <Button variant="secondary">Buy Now</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
