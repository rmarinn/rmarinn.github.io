import Container from "react-bootstrap/Container";
import BSNav from "react-bootstrap/Nav";
import BSNavbar from "react-bootstrap/Navbar";

const Navbar = () => {
  return (
    <BSNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <BSNav className="mx-auto">
            <BSNav.Link href="#home">Home</BSNav.Link>
            <BSNav.Link href="#link">Projects</BSNav.Link>
            <BSNav.Link href="#link">Contact</BSNav.Link>
          </BSNav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
