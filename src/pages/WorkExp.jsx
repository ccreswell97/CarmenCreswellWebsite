import {CardDeck, Container, Card} from 'react-bootstrap';

export function WorkExp() {
    return (
        <Container className="pt-4 pl-0">
            <Container className="pl-3">
            <h1>Work Experience</h1>
                <Card className="bg-white shadow">
                    <Card.Body className="pl-4">
                        <Card.Title className="">Software Engineer</Card.Title>
                        <Card.Subtitle className="">Adaptavist | July 2020</Card.Subtitle>
                        <Card.Text>
                            <ul className="card-text text-black text-left pt-2">
                                <li>Collaborated with a Senior Software Engineer to build a new app from the ground up, Learn for Jira</li>
                                <li>Single-handely conducted accessibility reviews of our app and implemented accessiblity standards in Learn for Jira</li>
                                <li>Worked closely with team members to design and develop robust solutions to meet client requirements for functionality, scalability and performance</li>
                                <li>Adjusted design parameters to boost performance and incorporate new features</li>
                                <li>Interfaced with cross-functional team of designers, developers, and technical support professionals to determine comprehensive list of requirement specifications for new applications</li>
                            </ul>
                        </Card.Text> 
                    </Card.Body>
                    <Card.Footer>
                        Techologies used: React, TypeScript, JavaScript, CSS, Java, Arquillian, JUnit, Lucene, Docker, Webpack, Maven, Lombok
                    </Card.Footer>
                </Card>

                <CardDeck className="pt-4">
                        <Card className="bg-white shadow">
                            <Card.Body className="pl-4">
                                <Card.Title className="text-black">Associate Software Engineer</Card.Title>
                                <Card.Subtitle className="text-black">Adaptavist | May 2019 - June 2020</Card.Subtitle> 
                                <Card.Text>   
                                    <ul className="card-text text-black text-left pt-2">
                                        <li>Modified existing software to fix bugs and improve performance</li>
                                        <li>Worked on 2 different teams for different products, ScriptRunner for Confluence and Learn for Jira</li>
                                        <li>Identified problems from testing and user feedback, submitted the problems for review, and fixed them</li>
                                        <li>Coordinated with Software Engineers and Senior Software Engineers to evaluate and improve software interfaces</li>
                                        <li>Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs and enhancements</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                Technologies used: Groovy, Java, React, TypeScript, JavaScript, CSS, Arquillian, JUnit, Gradle
                            </Card.Footer>
                        </Card>

                    <Card className="bg-white shadow">
                        <Card.Body className="pl-4">
                            <Card.Title className="text-black">Intern Software Engineer</Card.Title>
                            <Card.Subtitle className="text-black">Adaptavist | April 2018 - May 2019</Card.Subtitle>
                            <Card.Text>    
                                <ul className="card-text text-black text-left pt-2">
                                    <li>Collaborated with other developers to identify and alleviate bugs and errors in ScriptRunner for Jira</li>
                                    <li>Wrote clean, clear and well-tested code for various projects, such as ScriptRunner for Jira and ScriptRunner for Confluence</li>
                                    <li>Met with development team on a daily basis to provide project reports and milestone updates</li>
                                    <li>Talked with customers and helped out both development teams and our technical support professionals</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            Technologies used: Groovy, Java, React, Gradle, Jira Service Desk
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        </Container>
    );
}