import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
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
    return (<div>loading...</div>)
  }
  const containers = containerList && containerList.filter(c => c.running).map(c => {
    return <Container key={c.id} {...c} />
  })
  return (
    <div style={{ padding: '10px', backgroundColor: '#e2e1e0' }}>
      <div>
        Now running { containerList.filter(c => c.running).length } containers
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        { containers }
      </div>
    </div>
  )
}

export default graphql(MyQuery)(ContainerList)
