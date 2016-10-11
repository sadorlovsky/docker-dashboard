import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router'
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
  padding: '10px',
  margin: '10px auto',
  background: '#fff'
}

const Containers = ({ data: { loading, containerList } }) => {
  if (loading) {
    return (<div>loading...</div>)
  }
  const containers = containerList && containerList.filter(c => c.running).map(c => {
    return (
      <div style={style} key={c.id}>
        <div>
          <Link to={`/containers/${c.id}`}>id: {shorten(c.id)}</Link>
        </div>
        <div>name: {c.name}</div>
        <div>image: {c.image.name}</div>
        <div>{c.running ? 'running' : 'not running'}</div>
      </div>
    )
  })
  return (
    <div style={{ padding: '10px', background: 'green', flexGrow: 2 }}>
      <div>
        Now running { containerList.filter(c => c.running).length } containers
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        { containers }
      </div>
    </div>
  )
}

export default graphql(MyQuery)(Containers)
