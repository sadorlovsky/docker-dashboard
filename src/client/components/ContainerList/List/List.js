import React from 'react'
import { Page, Row, Column } from 'hedron'
import Container from './Container'

const List = ({ containers }) => {
  return (
    <Page fluid>
      <Row>
        {containers.map(c => (
          <Column key={c.id}>
            <Container {...c} />
          </Column>
        ))}
      </Row>
    </Page>
  )
}

export default List
