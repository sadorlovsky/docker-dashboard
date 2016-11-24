import React from 'react'
import { Page, Row, Column } from 'hedron'
import Container from './Container'

const Grid = ({ containers }) => {
  return (
    <Page fluid>
      <Row>
        {containers.map(c => (
          <Column sm={3} key={c.id}>
            <Container {...c} />
          </Column>
        ))}
      </Row>
    </Page>
  )
}

export default Grid
