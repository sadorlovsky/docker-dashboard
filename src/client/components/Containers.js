import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { shorten } from '../helpers'

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

const style = {
  width: '200px',
  border: '1px solid #000',
  padding: '10px'
}

const Containers = ({ loading, data }) => {
  if (loading) {
    return (<div>loading...</div>)
  }
  const containers = data.containerList && data.containerList.map(c => {
    return (
      <div style={style} key={c.id}>
        <div>id: {shorten(c.id)}</div>
        <div>name: {c.name}</div>
        <div>image: {c.image.name}</div>
        <div>{c.running ? 'running' : 'not running'}</div>
      </div>
    )
  })
  return (
    <div>{ containers }</div>
  )
}

export default graphql(MyQuery)(Containers)
