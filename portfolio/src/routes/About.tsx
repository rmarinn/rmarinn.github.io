import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";

const About = () => {
  const location = useLocation();

  return (
    <Container
      className="d-flex align-items-center h-100"
      as={m.div}
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Container id={location.pathname}>
        <Stack as={Card} id="title-card" className="p-2">
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
          <hr />

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
          <hr />

          <h1>Skills</h1>
          <ul>
            <li>Python</li>
            <li>React</li>
            <li>Research</li>
          </ul>
          <hr />

          <Nav>
            <Nav.Item>
              <Nav.Link href="https://github.com/rmarinn">Github</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/richard-marin-00495327b">
                LinkedIn
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Stack>
      </Container>
    </Container>
  );
};

export default About;
