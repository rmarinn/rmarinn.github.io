import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion as m } from "framer-motion";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "../components/ProjectCard";
import ProjectPage from "../components/ProjectPage";

export const Iris_Classifier_Proj = () => {
  return (
    <ProjectPage title="Iris Classifier" src="/Iris-classification.html" />
  );
};

const Projects = () => {
  return (
    <m.div
      className="m-0 p-0"
      key={location.pathname}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Container className="p-3">
        <Row>
          <Col>
            <h1 className="pb-3">featured projects</h1>
          </Col>
          <Col>
            <Nav.Link as={NavLink} to="/" className="text-end">
              back to home
            </Nav.Link>
          </Col>
        </Row>
        <Row as={Container}>
          <ProjectCard
            title="Iris Classifier Model"
            description="A classifier model that classifies Iris species from the Iris dataset with an accuracy of 0.96±0.03."
            path="/projects/iris-classifier"
            pdf_link="https://github.com/rmarinn/iris-classification/blob/9bb7cd9b424f5fc17c9c8022f4469da202b5b68b/Iris-classification.pdf"
            github_link="https://github.com/rmarinn/iris-classification"
          />
        </Row>
      </Container>
    </m.div>
  );
};

export default Projects;
