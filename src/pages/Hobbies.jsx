import { useState } from 'react';
import {Container, CardColumns} from 'react-bootstrap';
import {useEffect} from 'react';
import {HobbyCard} from '../components/HobbyCard';

export function Hobbies() {
    const [projects, setProjects] = useState("");

    useEffect(() => {
        fetch("https://api.ravelry.com/projects/jimetheslime/list.json", {
        "method": "GET",
        "headers": {
            "Authorization": `Basic ${process.env.REACT_APP_RAVELRY_KEY}`,
            "content-type": "application/json",
            "accept": "application/json"
        }
        })
        .then (response => response.json())
        .then (response => {
            console.log("response", response)
            setProjects(response.projects);
        })

    },[]);

    let projectElements = <p>Loading...</p>;

    if (projects !== undefined) {
        console.log("projects: ", projects);
        for (let i = 0; i<= projects.length; i++) {
            projectElements = projects.map((item) => 
                <HobbyCard key={item.permalink} project={item}/>
            )
        }
    } 

    console.log("projects", projects);
    return (
        <Container className="pt-4 pl-0">
            <Container className="pl-3">
                <h1>Hobbies</h1>
                <p>My favorite hobbies are fibercraft. That includes knitting, crocheting, cross stitch, embroidery, and anything else I can find. Here are my knitting and crochet projects (pulled in through the Ravelry API).</p>
                <CardColumns>
                {projectElements}
                </CardColumns>
            </Container>
        </Container>
    );
}