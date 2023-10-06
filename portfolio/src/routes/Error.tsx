import { useRouteError } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

interface ErrorInterface {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as ErrorInterface;
  console.error(error);

  return (
    <Row className="align-content-center text-center fullview">
      <Container>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Container>
    </Row>
  );
}
