import React from 'react'
import { Card } from 'react-bootstrap'

const Functional = () => (
  <Card style={{ width: '18rem', marginTop: 10 }}>
    <Card.Body>
      <Card.Title>Functional</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">component</Card.Subtitle>
      <Card.Text>State may be stored here</Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
)

export default Functional
