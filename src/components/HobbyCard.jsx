import {Card} from 'react-bootstrap';

export function HobbyCard({project}) {
    return (    
        <Card style={{ width: '18rem' }} className="mb-4">
            <Card.Img variant="top" src={project.first_photo.small_url} />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>Type: {project.craft_name}</Card.Text>
                <Card.Link href={project.links.self.href} target="_blank" rel="noreferrer">Project Page</Card.Link>
            </Card.Body>
        </Card>
    )
}