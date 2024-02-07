import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import fantasyImg from "../assets/fantasy.jpg";
import historyImg from "../assets/history.jpg";
import horrorImg from "../assets/horror.jpg";
import romanceImg from "../assets/romance.jpg";
import scifiImg from "../assets/scifi.jpg";
import Welcome from "./Welcome";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 ">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Welcome />
          </Col>
        </Row>
      </Container>

      <Row xs={1} md={5}>
        <Col>
          <Card className="shadow bg-light bg-opacity-10 h-100 anima">
            <Link to={"/Fantasy"}>
              <Card.Img
                variant="top"
                style={{ height: "400px" }}
                src={fantasyImg}
              />
            </Link>
            <Card.Body className="text-center text-light ">
              <Card.Title>Fantasy</Card.Title>
              <Button
                variant="info "
                className="text-light"
                onClick={() => navigate("/Fantasy")}
              >
                Check Out Fantasy books
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow bg-light bg-opacity-10 h-100 anima">
            <Link to={"/Horror"}>
              <Card.Img
                variant="top"
                style={{ height: "400px" }}
                src={historyImg}
              />
            </Link>
            <Card.Body className="text-center text-light">
              <Card.Title>Horror</Card.Title>
              <Button
                variant="info"
                className="text-light"
                onClick={() => navigate("/Horror")}
              >
                Check Out Horror books
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow bg-light bg-opacity-10 h-100 anima">
            <Link to={"/History"}>
              <Card.Img
                variant="top"
                style={{ height: "400px" }}
                src={horrorImg}
              />
            </Link>
            <Card.Body className="text-center text-light">
              <Card.Title>History</Card.Title>

              <Button
                variant="info"
                className="text-light"
                onClick={() => navigate("/History")}
              >
                Check Out History books
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow bg-light bg-opacity-10 h-100 anima">
            <Link to={"/Romance"}>
              <Card.Img
                variant="top"
                style={{ height: "400px" }}
                src={romanceImg}
              />
            </Link>
            <Card.Body className="text-center text-light">
              <Card.Title>Romance</Card.Title>
              <Button
                variant="info"
                className="text-light"
                onClick={() => navigate("/Romance")}
              >
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow bg-light bg-opacity-10 h-100 anima">
            <Link to={"/Scifi"}>
              <Card.Img
                variant="top"
                style={{ height: "400px" }}
                src={scifiImg}
              />
            </Link>
            <Card.Body className="text-center text-light">
              <Card.Title>Scifi</Card.Title>
              <Button
                variant="info"
                className="text-light"
                onClick={() => navigate("/Scifi")}
              >
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
