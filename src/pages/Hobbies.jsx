import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import { HobbyCard } from '../components/HobbyCard';

const Hobbies = () => {
  const [projects, setProjects] = useState('');

  const fetchData = () => {
    fetch('https://api.ravelry.com/projects/jimetheslime/list.json', {
      method: 'GET',
      headers: {
        Authorization: `Basic ${import.meta.env.VITE_RAVELRY_KEY}`,
        'content-type': 'application/json',
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setProjects(response.projects);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  let projectElements = <p>Loading...</p>;

  if (projects) {
    projectElements = projects.map((item) => (
      <Col key={item.permalink}>
        <HobbyCard project={item} />
      </Col>
    ));
  }

  return (
    <Container className="pt-4">
      <h1>Hobbies</h1>
      <p className="mb-4">
        To merge my love for fiber arts with programming, I integrated the Ravelry API into this page. By pulling data dynamically, my portfolio automatically updates with my latest knitting and crochet projects the moment they are uploaded to my profile.
      </p>
      <Row xs={1} md={2} lg={3} xl={4}>
        {projectElements}
      </Row>
    </Container>
  );
}

export default Hobbies;
