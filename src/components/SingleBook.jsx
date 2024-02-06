import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleBook = ({ dataBooks, handleSelected, selected }) => {
  const [cardSelected, setCardSelected] = useState(false);

  return (
    <>
      <Card
        className={
          selected
            ? "border border-warning h-100 bg-dark text-light z-0"
            : "h-100 bg-dark text-light z-0"
        }
      >
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
              variant={cardSelected ? "warning" : "success"}
              onClick={() => {
                setCardSelected(!cardSelected);
                handleSelected(cardSelected ? undefined : dataBooks);
              }}
            >
              {cardSelected ? "Hide Reviews" : "Show Reviews"}
            </Button>
            <Button variant="secondary">Buy Now</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
