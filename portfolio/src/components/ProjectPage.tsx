import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { NavLink, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import JupyterNotebook from "./JupyterNotebook";
import { motion as m } from "framer-motion";

type ProjectPageProps = {
  title: string;
  src: string;
};

const ProjectPage = ({ title, src }: ProjectPageProps) => {
  const location = useLocation();

  return (
    <Container
      className="p-3 h-100"
      as={m.div}
      key={location.pathname}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      fluid
    >
      <Card className="w-100 h-100 flex-fill d-flex">
        <Row>
          <Col>
            <h1>{title}</h1>
          </Col>
          <Col>
            <Nav className="justify-content-end">
              <Nav.Link to="/projects" as={NavLink}>
                return to projects
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <JupyterNotebook src={src} />
      </Card>
    </Container>
  );
};

export default ProjectPage;
