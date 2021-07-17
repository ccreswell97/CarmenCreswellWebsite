import {Container, Card, Row, Col, Image} from 'react-bootstrap';
import Imagey from "../images/website_photo.jpg"

export function Home() {
    return (
        <Container className="pt-4 pl-0">
            <Container className="pl-3">
                <Row>
                    <Col m={6}>
                        <h1>Hi! I'm Carmen</h1>
                        <p className="pb-4">
                            I'm an experienced software engineer with a Bachelor's degree in Computer Science, with minors in Cybersecurity and Web Design. I have experience working with both front and backend systems, architeching apps from the ground up, and working on a distributed team with members in many different times zones. I made this website from scratch so I can have examples of my work and have an easy place to link my projects. It also serves as an easy-to-read resume.
                        </p>
                        <div className="pb-5">
                        <Card bg={'secondary'} className="shadow">
                            <Card.Body>
                            <Card.Title>My Languages, Technologies, and Frameworks</Card.Title>
                            <br/>
                            <Row>
                                <Col sm={6}>
                                    <ul className="list-unstyled">
                                        <li>Java</li>
                                        <li>React</li>
                                        <li>Python</li>
                                        <li>JavaScript</li>
                                        <li>TypeScript</li>
                                        <li>Webpack</li>    
                                        <li>Yarn</li>
                                        <li>Npm</li>
                                        <li>CSS/SCSS</li>
                                        <li>Groovy</li>
                                        <li>Heroku</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </Col>
                                <Col sm={6}>
                                    <ul className="list-unstyled">
                                        <li>S3 Buckets</li>
                                        <li>API Gateway</li>
                                        <li>AWS Lambda</li>
                                        <li>DynamoDB</li>
                                        <li>Lucene</li>
                                        <li>Arquillian</li>
                                        <li>Selenium</li>
                                        <li>SQL, MySQL</li>
                                        <li>Docker</li>
                                        <li>GraphCMS</li>
                                        <li>GraphQL</li>
                                    </ul>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>   
                        </div> 
                    </Col>
                    <Col sm={6}>
                        <Image src={Imagey} rounded fluid/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}