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
    <Col xs={4}>
      <Card className="text-start">
        <Card.Title>{title}</Card.Title>
        <Card.Body>{description}</Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <Nav className="justify-content-end align-items-center" as="ul">
                <Nav.Item>
                  <p className="my-auto">View project:</p>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={NavLink} to={path}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href={pdf_link}>
                    <FontAwesomeIcon icon={faFilePdf} />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href={github_link}>
                    <FontAwesomeIcon icon={faGithub} />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProjectCard;
