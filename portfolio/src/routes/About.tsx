import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

const About = () => {
  return (
    <Card body as={Container} fluid>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <h1>About me</h1>
          <p>
            Hello! I'm Richard A. Marin, a Physics graduate from Mapúa
            University. I have a passion for exploring how our world's
            mechanisms through the tools of science and technology. My journey
            through the world of programming has been an exciting one, as I've
            had the opportunity to work with various programming languages and
            harness the power of frameworks to bring my projects to life. Among
            the myriad of languages, Python has captured my heart, and I find
            myself most at home when crafting solutions with its versatile
            tools.
          </p>
          <p>
            What truly fuels my curiosity and enthusiasm are projects that delve
            into the realms of Machine Learning and cutting-edge research.
            Whether it's unlocking patterns in complex datasets or pushing the
            boundaries of what's possible, I thrive on the challenges and
            creativity that these areas bring. My goal is not just to code but
            to discover and innovate. I am excited to continue this journey of
            discovery.
          </p>
        </ListGroup.Item>
        <ListGroup.Item>
          <h1>Experience</h1>
          <ul>
            <li>
              <b>IT Intern @ Philippine Ports Authority </b>
              <br />
              <i>March 19-29, 2019</i> <br />
              Managed the Development of a Web Application using the XAMPP Stack
            </li>
            <li>
              <b>Jr. Mobile App Developer @ MGHS Services </b>
              <br />
              <i>July 5 - August 24, 2023 </i>
              <br />
              Developed a mobile app using the Flutter framework
            </li>
          </ul>
        </ListGroup.Item>
        <ListGroup.Item>
          <h1>Skills</h1>
          <ul>
            <li>Python</li>
            <li>React</li>
            <li>Research</li>
          </ul>
        </ListGroup.Item>
        <ListGroup.Item>
          <Nav>
            <Nav.Item>
              <Nav.Link href="https://github.com/rmarinn">Github</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/richard-marin-00495327b">
                LinkedIn
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default About;
