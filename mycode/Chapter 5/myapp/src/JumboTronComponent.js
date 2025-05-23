import { Container, Card } from 'react-bootstrap';

function JumboTronComponent() {
  return (
    <Container className="py-5">
      <Card className="text-center bg-light">
        <Card.Body>
          <Card.Title>Welcome!</Card.Title>
          <Card.Text>
            This is a simple hero unit — a simple jumbotron-style component.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default JumboTronComponent;

