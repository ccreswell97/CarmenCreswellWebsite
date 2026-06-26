import { Container, Card, Row, Col, Image } from 'react-bootstrap';
import Imagey from '../images/website_photo.jpg';

const Home = () => {
  return (
  <Container className="pt-4">
    <Row>
      <Col md={6}>
        <h1>Hi! I'm Carmen</h1>
        <p className="pb-4">
          I am a software engineer with a strong foundation in full-stack development, specializing primarily in frontend engineering. Holding a Bachelor’s in Computer Science with minors in Cybersecurity and Web Design, I have a proven track record of architecting applications from the ground up and collaborating effectively across distributed, multi-timezone teams. I built this responsive platform from scratch to serve as an interactive portfolio of my technical work, a showcase for my projects, and an accessible, easy-to-read resume.
        </p>
        <div className="pb-5">
          <Card bg={'secondary'} className="shadow">
            <Card.Body>
              <Card.Title className="mb-4">
                Languages, Technologies, and Frameworks
              </Card.Title>
              <Row>
                <Col sm={6}>
                  <ul className="list-unstyled">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Java</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>Webpack</li>
                    <li>Vite</li>
                    <li>Node.js</li>
                    <li>CSS/SCSS</li>
                    <li>Bootstrap</li>
                    <li>AngularJS</li>
                    <li>jQuery</li>
                  </ul>
                </Col>
                <Col sm={6}>
                  <ul className="list-unstyled">
                    <li>S3 Buckets</li>
                    <li>API Gateway</li>
                    <li>AWS Lambda</li>
                    <li>Selenium</li>
                    <li>Jest</li>
                    <li>React Testing Library</li>
                    <li>SQL</li>
                    <li>Docker</li>
                    <li>GraphCMS</li>
                    <li>GraphQL</li>
                    <li>Heroku</li>
                    <li>GitHub Copilot</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Col>
      <Col sm={6}>
        <Image src={Imagey} rounded fluid />
      </Col>
    </Row>
  </Container>
  );
}

export default Home;