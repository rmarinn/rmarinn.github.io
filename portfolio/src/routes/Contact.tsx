import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import { motion as m } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <m.div
      className="d-flex align-items-center h-100"
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Container>
        <Row className="text-center justify-content-center mx-0" as={Container}>
          <Col xs={6}>
            <Card>
              <Col>
                <h1>/contact</h1>
              </Col>
              <p>
                email: <b>richard.marin529@protonmail.com</b>
              </p>
              <Nav as="ul" className="justify-content-center">
                <Nav.Item as="li">
                  <Nav.Link href="https://github.com/rmarinn">
                    Github
                    <FontAwesomeIcon icon={faGithub} className="ms-2" />
                  </Nav.Link>{" "}
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="https://www.linkedin.com/in/richard-marin-00495327b">
                    LinkedIn
                    <FontAwesomeIcon icon={faLinkedin} className="ms-2" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as={NavLink} to="/">
                    Home
                    <FontAwesomeIcon icon={faHouse} className="ms-2" />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card>
          </Col>
        </Row>
      </Container>
    </m.div>
  );
};

export default Contact;
