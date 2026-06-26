import { Container, Card, Row, Col } from 'react-bootstrap';

 const Projects = () => {
  return (
    <Container className="pt-4 ps-0">
      <h1 className="mb-4">Projects</h1>
      <Row>
        <Col>
          <Card className="bg-white shadow">
            <Card.Body className="ps-4">
              <Card.Title className="">Personal Resume Website</Card.Title>
              <Card.Text>
                Originally launched in 2021 as my first personal project, this website has served as a long-term development sandbox for exploring modern web technologies. Over its lifespan, I have continuously maintained, refactored, and migrated its architecture to stay aligned with industry standards—most recently transitioning the core engine from a legacy Create React App setup to a high-performance Vite build system.
              </Card.Text>
              <Card.Link
                target="_blank"
                rel="noreferrer"
                href="https://carmencreswell.com"
              >
                www.carmencreswell.com
              </Card.Link>
            </Card.Body>
            <Card.Footer>
              Technologies used: React, JavaScript, CSS/SCSS, Heroku,
              Bootstrap, Ravelry API, Node, Vite
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row className="pt-4">
        <Col>
          <Card className="bg-white shadow">
            <Card.Body className="ps-4">
              <Card.Title className="">Springfield Women In Technology Website</Card.Title>
              <Card.Text>
                Built and launched the official website for Springfield Women in Technology to strengthen the user group's online presence. The platform serves as a central hub for community engagement, event visibility, and member outreach.
              </Card.Text>
              <Card.Link
                target="_blank"
                rel="noreferrer"
                href="https://www.springfieldwomenintech.com/"
              >
                www.springfieldwomenintech.com
              </Card.Link>
            </Card.Body>
            <Card.Footer>Technologies used: SquareSpace, CSS</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;