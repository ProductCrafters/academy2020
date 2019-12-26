import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class Stateful extends Component {
  render() {
    return (
      <Card style={{ width: '18rem',  marginTop: 10 }}>
        <Card.Body>
          <Card.Title>Stateful</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">component</Card.Subtitle>
          <Card.Text>
            State may be stored here
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}

export default Stateful
