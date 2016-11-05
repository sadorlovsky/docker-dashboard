import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from '../Loading'
import Container from './Container'

const MyQuery = gql`
  query MyQuery {
    containerList {
      id
      name,
      image {
        name
      },
      running
    }
  }
`

const ContainerList = ({ data: { loading, containerList } }) => {
  if (loading) {
    return (<Loading />)
  }
  const containers = containerList && containerList.filter(c => c.running).map(c => {
    return <Container key={c.id} {...c} />
  })
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
      {containers}
    </div>
  )
}

export default graphql(MyQuery)(ContainerList)
