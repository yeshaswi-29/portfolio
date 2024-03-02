// import "../App.css";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
function Navbar() {
  return (
    <>
      <Container className="navbar">
        <Nav className="justify-content-end ms-auto" activeKey="/home">
          <Nav.Item>
            <Nav.Link
              className="text-white animate__animated animate__pulse"
              href="/home"
            >
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-white animate__animated animate__pulse"
              eventKey="link-1"
            >
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="text-white animate__animated animate__pulse"
              eventKey="link-2"
            >
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
}

export default Navbar;
