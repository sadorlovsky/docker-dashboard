import React from 'react'
import { Row, Column } from 'hedron'
import Container from './Container'

const Grid = ({ containers }) => {
  return (
    <Row>
      {containers.map(c => (
        <Column fluid sm={3} key={c.id}>
          <Container {...c} />
        </Column>
      ))}
    </Row>
  )
}

export default Grid
