import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSumbit = (e) => {
    e.preventDefault();
  };

  const location = useLocation();

  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark" role="NavBar">
      <Container fluid>
        <Navbar.Brand>
          <Link
            className={`nav-link${location.pathname === "/" ? " active" : ""}`}
            to={"/"}
          >
            EpiBooks
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              className={`nav-link${
                location.pathname === "/" ? " active" : ""
              }`}
              to={"/"}
            >
              Home
            </Link>
            <Link
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
              to="/about"
            >
              About
            </Link>
            <Link
              className={
                location.pathname === "/Browse" ? "nav-link active" : "nav-link"
              }
              to="/Browse"
            >
              Browse
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchSumbit}>
            <Form.Control
              type="search"
              placeholder="Search book"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
