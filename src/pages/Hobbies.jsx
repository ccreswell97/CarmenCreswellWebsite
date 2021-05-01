import {Container} from 'react-bootstrap';

const apiAuth = {
    "username": process.env.REACT_APP_API_USERNAME
}

console.log("username", apiAuth);
export function Hobbies() {
    return (
        <Container className="pt-4 pl-0">
            <Container className="pl-3">
                <h1>Hobbies</h1>
                <p>Knitting and Crochet</p>
            </Container>
        </Container>
    );
}