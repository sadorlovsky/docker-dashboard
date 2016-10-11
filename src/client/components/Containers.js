import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router'
import { Label } from 'semantic-ui-react'
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
  background: '#fff',
  borderRadius: '2px',
  width: '200px',
  padding: '10px',
  margin: '10px'
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
        <div>{c.running ? <Label circular empty color='green' /> : <Label circular empty color='grey' />}</div>
      </div>
    )
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

export default graphql(MyQuery)(Containers)
