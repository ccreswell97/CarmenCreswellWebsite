import { Navbar, Nav } from 'react-bootstrap';

import '../stylesheets/nav.scss';

export function AppNav() {
  return (
    <div>
      <Navbar bg="primary" expand="md">
        <Navbar.Brand href="/home">Carmen Creswell-Johnson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end me-3">
          <Nav className="ms-4 ms-md-0 align-items-end">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/work">Work Experience</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/hobbies">Hobbies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
