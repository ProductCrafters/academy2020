import React from 'react'
import Stateful from './Stateful'
import Functional from './Functional'
import Func from './Func'
import { Container, Row, Col } from 'react-bootstrap'

const SamplesList = () => (
  <Container>
    <Row>
      <Col>
        <Stateful />
        <Functional />
        <Func />
      </Col>
    </Row>
  </Container>
)

export default SamplesList
