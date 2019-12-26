import React from 'react'
import Stateful from './Stateful'
import Functional from './Functional'
import Func from './Func'
import { Container, Row, Col } from 'react-bootstrap'

const SamplesList = () => {
  const par1 = 1
  const par2 = 2
  const par3 = 3

  return (
    <Container>
      <Row>
        <Col>
          <Stateful par1={1} par2={2} par3={3} />
          <Functional par1={1} par2={2} par3={3} />
          <Func par1={1} par2={2} par3={3} />
        </Col>
      </Row>
    </Container>
  )
}

export default SamplesList
