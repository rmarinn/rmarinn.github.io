import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useLocation, NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const location = useLocation();

  return (
    <Container
      className="d-flex align-items-center py-3"
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
            frameworks to bring my projects to life. Among the myriad of
            languages, and I find myself most at home when working with Python
            and its versatile tools and packages.
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

          <h1>Main Skills</h1>
          <ul>
            <li>
              <b>Python: </b>
              <small>
                Pandas, Matplotlib, Numpy, Scikit-learn, Keras, Scipy, etc.
              </small>
            </li>
            <li>
              <b>Data Science and Machine Learning: </b>
              <small>
                <Nav.Link as={NavLink} to="/projects" className="d-inline">
                  view projects
                </Nav.Link>
              </small>
            </li>
            <li>
              <b>Web Development: </b>
              <small>React, Typescript, Bootstrap</small>
            </li>
            <li>
              <b>Research: </b>
              <small>
                <Nav.Link
                  href="https://proceedings.spp-online.org/article/view/SPP-2023-2H-03"
                  className="d-inline"
                >
                  Quantum DNA sequencing using Gaussian amplitude amplification
                </Nav.Link>
              </small>
            </li>
          </ul>

          <i>Other skills:</i>
          <ul>
            <li>
              <b>Cloud Services:</b> AWS S3, AWS EC2
            </li>
            <li>
              <b>Mobile development:</b> Android Studio, Flutter
            </li>
            <li>
              <b>Web Frameworks:</b> PHP, Laravel, XAMPP Stack, Flask
            </li>
            <li>
              <b>other languages:</b> R, C#, JavaScript, Dart
            </li>
          </ul>

          <hr />

          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/contact">
                Contact
                <FontAwesomeIcon icon={faAddressBook} className="ms-2" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/">
                Home
                <FontAwesomeIcon icon={faHouse} className="ms-2" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Stack>
      </Container>
    </Container>
  );
};

export default About;
