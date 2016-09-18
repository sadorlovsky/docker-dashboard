import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MyQuery = gql`
  query MyQuery {
    containerList {
      id
      name,
      image {
        name
      }
    }
  }
`

const Containers = ({ loading, data }) => {
  if (loading) {
    return (<div>loading...</div>)
  }
  const containers = data.containerList && data.containerList.map(c => {
    return (
      <div key={c.id}>
        <div>id: {c.id}</div>
        <div>name: {c.name}</div>
        <div>image: {c.image.name}</div>
      </div>
    )
  })
  return (
    <div>{ containers }</div>
  )
}

export default graphql(MyQuery, {
  options: {
    pollInterval: 10000
  }
})(Containers)
