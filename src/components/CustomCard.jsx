import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import data from "../data/fantasy.json";

const CustomCard = ({ titlePart }) => (
  <Container>
    <h1>{titlePart}</h1>
    <Row
      className="justify-content-center mt-3 g-3 mx-3 mx-md-0"
      xs={1}
      md={2}
      lg={3}
      xl={4}
      xxl={5}
    >
      {data.map((books) => {
        return (
          <Col key={books.asin}>
            <Card className="h-100 bg-dark text-light border border-0">
              <Card.Img
                variant="top"
                src={books.img}
                style={{ height: "400px" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="flex-grow-1  fw-semibold">
                  {books.title}
                </Card.Title>
                <Card.Text className="text-end fw-light">
                  {books.price} $
                </Card.Text>
                <div className="d-flex justify-content-between ">
                  <Button variant="success">Add to Cart</Button>
                  <Button variant="secondary">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  </Container>
);

export default CustomCard;
