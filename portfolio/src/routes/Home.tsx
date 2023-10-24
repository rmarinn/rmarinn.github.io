import Container from "react-bootstrap/Container";
import { Link as RouterLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { motion as m, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import "../assets/scss/home.scss";

const Home = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <m.div
        className="d-flex align-items-center h-100"
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Container>
          <Row
            className="text-center justify-content-center mx-0"
            as={Container}
          >
            <Col md={4}>
              <Stack as={Card} id="title-card" className="py-4 px-5">
                <h1>Richard Marin</h1>
                <p>Data Analytics • Programming • Research</p>
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
      </m.div>
    </AnimatePresence>
  );
};

export default Home;
