import Container from "react-bootstrap/Container";
import { Link as RouterLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Flowfield from "../components/Flowfield";
import "../assets/scss/home.scss";

const Home = () => {
  return (
    <>
      <Flowfield id="flow-field" />
      <Container className="d-flex align-items-center h-100">
        <Row className="text-center justify-content-center mx-0" as={Container}>
          <Col xs={4}>
            <Stack as={Card} id="title-card" className="pt-2">
              <h1>Richard Marin</h1>
              <p className="d-none d-md-block">
                Data Analytics • Programming • Research
              </p>
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
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
