import React from 'react'
import { Row, Column } from 'hedron'
import Container from './Container'

const Grid = ({ containers }) => {
  return (
    <Row>
      {containers.map(c => (
        <Column fluid xs={12} sm={6} md={4} lg={3} key={c.id}>
          <Container {...c} />
        </Column>
      ))}
    </Row>
  )
}

export default Grid
