import { useState } from 'react';
import {Container, CardColumns} from 'react-bootstrap';
import {useEffect} from 'react';
import {HobbyCard} from '../components/HobbyCard';

export function Hobbies() {
    const [projects, setProjects] = useState("");

    const fetchData = () => {
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
    }

    useEffect(() => {
        fetchData();
    },[]);

    let projectElements = <p>Loading...</p>;

    if (projects !== "") {
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
                <p>My favorite hobbies are knitting and crochet, and I wanted to find a way to incorporate them into my programming. So, I uploaded all my projects to a site called Ravelry and used their API to get all my projects dynamically.</p>
                <CardColumns>
                {projectElements}
                </CardColumns>
            </Container>
        </Container>
    );
}