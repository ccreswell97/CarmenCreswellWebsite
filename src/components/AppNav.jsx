import {Navbar, Nav} from 'react-bootstrap';

export function AppNav() {
    return(
        <div>
            <Navbar bg="primary" expand="md">
            <Navbar.Brand href="/home">Carmen Creswell</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/education">Education</Nav.Link>
                <Nav.Link href="/work">Work Experience</Nav.Link>
                <Nav.Link href="/hobbies">Hobbies</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
}