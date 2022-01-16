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

                    <Card className="bg-white shadow" border="primary">
                        <Card.Body className="pl-4">
                            <Card.Title className="">Ozark Energy Services Website</Card.Title>
                            <Card.Text>
                                Next up on my personal project list! OES is my dad's electrical and solar company that he's had ever since I can remember. He mentioned that I should make them a website when I had just started at university, but I didn't have time. The website he has now is fine, but I'd like to build him a new, updated version.
                            </Card.Text> 
                        </Card.Body>
                        <Card.Footer>
                            Techologies to be used: React, JavaScript, CSS/SCSS, Webpack
                        </Card.Footer>
                    </Card>

                    <Card className="bg-white shadow" border="primary">
                        <Card.Body className="pl-4">
                            <Card.Title className="">Board Game Selector</Card.Title>
                            <Card.Text>
                                I am excited to start this one! Have you ever wanted to play a board game but couldn't decide which one? Use this (future) website and enter in some information (number of players, length of game, etc.) and we will tell you what to play! This small website idea has lots of room to expand, with features like account creation and your own library of games so you can get results from your own collection.
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