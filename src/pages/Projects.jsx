import {Container, Card, CardDeck} from 'react-bootstrap';

export function Projects() {
    return (
        <Container className="pt-4 pl-0">
            <Container className="pl-3">
                <h1>Projects</h1>
                <CardDeck>

                    <Card className="bg-white shadow" border="primary">
                        <Card.Body className="pl-4">
                            <Card.Title className="">Personal Resume Website</Card.Title>
                            <Card.Text>
                                Created as my first personal project to showcase my work and so that I can have a place I can link my other projects. I enjoy the creative aspect of web design and the ability to play with React components and other technologies that I wouldn't normally get to through my job.
                            </Card.Text> 
                            <Card.Link target="_blank" rel="noreferrer" href="https://carmencreswell.com">
                                carmencreswell.com
                            </Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            Techologies used: React, JavaScript, CSS/SCSS, Heroku, Bootstrap, APIs
                        </Card.Footer>
                    </Card>

                    <Card className="bg-white shadow" border="primary">
                        <Card.Body className="pl-4">
                            <Card.Title className="">Springfield WIT Website</Card.Title>
                            <Card.Text>
                                I am a board member for the Springfield, Missouri Women in Tech user group, and I am currently the only developer on the board. I created this website to strengthen the online presence of the group. The next step is to get MailChimp set up so we can gather email addresses and our stretch goal is to provide an online option to buy t-shirts and other WIT merch.
                            </Card.Text> 
                            <Card.Link target="_blank" rel="noreferrer" href="https://carmencreswell.com">
                                www.sgfwit.com
                            </Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            Techologies used: HTML, CSS/SCSS, Netlify, Bootstrap, MailChimp
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        </Container>
    );
}