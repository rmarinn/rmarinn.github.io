import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { motion as m } from "framer-motion";

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
          <Col xs={4}>
            <Card>
              <h1>/contact</h1>
            </Card>
          </Col>
        </Row>
      </Container>
    </m.div>
  );
};

export default Contact;
