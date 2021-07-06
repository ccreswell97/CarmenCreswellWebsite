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
                                Created as my first personal project to showcase my work and so that I can have a place I can link my other projects. I enjoy the creative aspect of web design and the ability to play with React components and other technologies that I wouldn't normally get to at work.
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
                            <Card.Title className="">Ozark Energy Services Website</Card.Title>
                            <Card.Text>
                                Next up on my personal project list! OES is my dad's electrical and solar company that he's had since I was little. He asked me to make them a website when I had just started at university, and I didn't have time. I'm going to finally build him the website his company deserves.
                            </Card.Text> 
                        </Card.Body>
                        <Card.Footer>
                            Techologies to be used: React, JavaScript, CSS/SCSS, Webpack, AWS S3 Bucket
                        </Card.Footer>
                    </Card>

                    <Card className="bg-white shadow" border="primary">
                        <Card.Body className="pl-4">
                            <Card.Title className="">Board Game Selector</Card.Title>
                            <Card.Text>
                                I am excited to start this one! Ever wanted to play a board game but can't decide which one? Use this website and enter in how many players and how much time you have and we will tell you what to play! This website will have lots of features, like the ability to create an account and save a library of your games so you can only get results from your own collection.
                            </Card.Text> 
                        </Card.Body>
                        <Card.Footer>
                            Techologies to be used: React, JavaScript, CSS/SCSS, Webpack, undecided backend - possibly SpringBoot and MySQL or AWS.
                        </Card.Footer>
                    </Card>

                </CardDeck>
            </Container>
        </Container>
    );
}