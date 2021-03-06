import React from 'react'
import { Card } from 'react-bootstrap'

function Func(props) {
  console.log(props)
  return (
    <Card style={{ width: '18rem', marginTop: 10 }}>
      <Card.Body>
        <Card.Title>Function</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" />
        <Card.Text>State may be stored here</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Func
