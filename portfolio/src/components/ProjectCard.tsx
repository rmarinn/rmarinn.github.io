import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons/faFilePdf";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProjectCardProps = {
  title: string;
  description: string;
  path: string;
  pdf_link: string;
  github_link: string;
};

const ProjectCard = ({
  title,
  description,
  path,
  pdf_link,
  github_link,
}: ProjectCardProps) => {
  return (
    <Col md={4} sm={6}>
      <Card className="text-start mb-3">
        <Card.Title>{title}</Card.Title>
        <Card.Body>{description}</Card.Body>
        <Card.Footer>
          <Row>
            <Col className="p-0">
              <p className="my-auto">View project:</p>
            </Col>
            <Col className="p-0 text-end">
              <Nav.Link as={NavLink} to={path} className="d-inline">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Nav.Link>
              <Nav.Link href={pdf_link} className="d-inline ms-3">
                <FontAwesomeIcon icon={faFilePdf} />
              </Nav.Link>
              <Nav.Link href={github_link} className="d-inline ms-3">
                <FontAwesomeIcon icon={faGithub} />
              </Nav.Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProjectCard;
