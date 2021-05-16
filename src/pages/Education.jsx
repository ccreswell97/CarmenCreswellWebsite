import {Container, Card} from 'react-bootstrap';

export function Education() {
    return (
        <Container fluid className="pt-4 pl-0">
            <Container className="container pl-3">
                <h1>Education</h1>
                <div className="pt-4">
                    <Card className="bg-white shadow">
                        <Card.Body className="text-center">
                            <h4 className="text-black">Bachelor of Science, Computer Science</h4>
                            <h6 className="text-black">Missouri State University</h6>
                            <div> 
                                <ul className="text-black text-left pt-2">
                                    <li>4.0 GPA</li>
                                    <li>Started the Women in Technology Club</li>
                                    <li>Received honorable mention for the Womxn of Distinction Award</li>
                                    <li>Minored in Cybersecurity</li>
                                    <li>Received a Certificate in Web Design</li>
                                    <li>Graduated Summa Cum Laude</li>
                                </ul>
                            </div>   
                            <Card.Link target="_blank" rel="noreferrer" href="https://blogs.missouristate.edu/cnas-newswatch/2018/07/05/working-for-women-in-stem/" className="card-link">Article about Womxn of Distinction Award</Card.Link>
                            <Card.Link target="_blank" rel="noreferrer" href="https://blogs.missouristate.edu/cnas-newswatch/2018/07/07/springfield-expedia-director-speaks-on-campus/" className="card-link">Article about WIT Club</Card.Link>
                            <Card.Link target="_blank" rel="noreferrer" href="https://blogs.missouristate.edu/computerscience/2017/12/18/women-in-computing-conference/" className="card-link">Article about my friends and I before we started WIT</Card.Link>
                        </Card.Body>
                    </Card>
                </div>

                <div className="pt-4">
                    <Card className="bg-white shadow">
                        <Card.Body className="text-center">
                            <h4 className="text-black">Associate of Arts, General Studies</h4>
                            <h6 className="text-black">Crowder College</h6>
                            <div>    
                                <ul className="text-black text-left pt-2">
                                    <li>4.0 GPA</li>
                                    <li>On the Dean's List every semester</li>
                                    <li>Finished in high school through Dual Enrollment (first one at my school to do it)</li>
                                    <li>Graduated Summa Cum Laude</li>
                                </ul>
                            </div>
                            <Card.Link target="_blank" rel="noreferrer" href="https://www.fourstateshomepage.com/news/brads-beat-high-school-student-graduates-with-college-degree/?fbclid=IwAR0oCnXSp2JRVrIlkjG2-PP2AKDEEcieiepAj_uTdUhIjU1rbOKpRik2i4E" className="card-link">Article on me graduating with my Associate's while in high school</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </Container>
    );
}