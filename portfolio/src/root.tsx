import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Container fluid className="m-0 p-4">
      <Outlet />
    </Container>
  );
};

export default Root;
