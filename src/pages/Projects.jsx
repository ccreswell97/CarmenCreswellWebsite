import {Container, Card, Row, Col} from 'react-bootstrap';

export function Projects() {
    return (
        <Container className="pt-4 pl-0">
            <Container className="pl-3">
                <h1 className='mb-4'>Projects</h1>
                <Row>
                    <Col>
                        <Card className="bg-white shadow">
                            <Card.Body className="pl-4">
                                <Card.Title className="">Personal Resume Website</Card.Title>
                                <Card.Text>
                                    Created as my first personal project to showcase my work and so that I can have a place I can link my other projects. I enjoy the creative aspect of web design and the ability to play with React components and other technologies that I wouldn't normally get to through my job.
                                </Card.Text> 
                                <Card.Link target="_blank" rel="noreferrer" href="https://carmencreswell.com">
                                    www.carmencreswell.com
                                </Card.Link>
                            </Card.Body>
                            <Card.Footer>
                                Techologies used: React, JavaScript, CSS/SCSS, Heroku, Bootstrap, API
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row className='pt-4'>
                    <Col>
                        <Card className="bg-white shadow">
                            <Card.Body className="pl-4">
                                <Card.Title className="">Springfield WIT Website</Card.Title>
                                <Card.Text>
                                    I am a board member for the Springfield, Missouri Women in Tech user group. I created this website using SquareSpace to strengthen the online presence of the group.
                                </Card.Text> 
                                <Card.Link target="_blank" rel="noreferrer" href="https://www.springfieldwomenintech.com/">
                                    www.springfieldwomenintech.com
                                </Card.Link>
                            </Card.Body>
                            <Card.Footer>
                                Techologies used: SquareSpace, CSS
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}