import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link as RouterLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

// https://avatars.githubusercontent.com/u/34529290?v=4

const Home = () => {
  return (
    <Container className="d-flex align-items-center fullview">
      <Container>
        <Row className="justify-content-center">
          <Image
            id="profile-picture"
            src="https://avatars.githubusercontent.com/u/34529290?v=4"
            roundedCircle
          />
        </Row>
        <Row className="text-center">
          <h1>Richard Marin</h1>
        </Row>
        <Row className="text-center">
          <p>Data Analytics - Programming - Research</p>
        </Row>
        <Row>
          <Nav className="justify-content-center">
            <Nav.Link as={RouterLink} to="/about">
              about
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/projects">
              projects
            </Nav.Link>
            <Nav.Link as={RouterLink} to="/contact">
              contact
            </Nav.Link>
          </Nav>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
