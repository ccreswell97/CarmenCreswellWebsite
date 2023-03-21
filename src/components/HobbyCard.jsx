import {Card} from 'react-bootstrap';

export function HobbyCard({project}) {
    console.log(`project: ${project.name}: ${JSON.stringify(project.first_photo)}`);
    return (    
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.first_photo.small_url} />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>Type: {project.craft_name}</Card.Text>
                <Card.Link href={project.links.self.href} target="_blank" rel="noreferrer">Project Page</Card.Link>
            </Card.Body>
        </Card>
    )
}