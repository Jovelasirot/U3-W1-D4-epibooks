import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MyFooter = () => (
  <>
    <Container fluid className="bg-dark">
      <Row
        className="text-light justify-content-around text-center align-items-center "
        style={{ height: "150px" }}
      >
        <Col>
          <p>Epibooks 2024</p>
        </Col>
        <Col>
          <p>Images curated by Epicode</p>
        </Col>
        <Col>
          <p>Made by Jovel</p>
        </Col>
      </Row>
    </Container>
  </>
);

export default MyFooter;
