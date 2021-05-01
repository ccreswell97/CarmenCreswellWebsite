import { useState } from 'react';
import {Container, Card, CardDeck} from 'react-bootstrap';
import {useEffect} from 'react';
import Axios from 'axios';
import {HobbyCard} from '../components/HobbyCard';

export function Hobbies() {
    const [projects, setProjects] = useState(null);
    //const [cards, setCards] = useState(null);

    useEffect(() => {
        Axios({
            method: "GET",
            url: "/getHobbies",
            headers: {
                "Content-Type": "application/json"
              }
            }).then(res => {
              console.log("data" , res.data.projects);
              setProjects(res.data.projects);
            });
    },[]);

    console.log("projects", projects);
    return (
        <Container className="pt-4 pl-0">
            <Container className="pl-3">
                <h1>Hobbies</h1>
                <p>My favorite hobbies are fibercraft. That includes knitting, crocheting, cross stitch, embroidery, etc. Here are my knitting and crochet projects (pulled in through the Ravelry API).</p>
            </Container>
        </Container>
    );
}