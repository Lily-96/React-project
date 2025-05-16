import { Container, Row, Col, Button } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

const Footer = () => (
  <footer className="bg-dark text-light py-4">
    <Container>
      <Row>
        <Col className="text-center">
          <div className="mb-2">
            <BsFacebook className="me-3" />
            <BsInstagram />
            <BsTwitterX className="mx-3" />
            <BsYoutube />
          </div>
          <div></div>
        </Col>
      </Row>
      <Row className="justify-content-center me-2">
        <Col xs="auto">
          <Button variant="secondary" size="sm" className="rounded-0">
            Service Code
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center me-2">
        <Col xs="auto" className="text-muted small mt-2 text-white">
          <p className="text-white"> © 1997–2023 Netflix, Inc.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);
export default Footer;
