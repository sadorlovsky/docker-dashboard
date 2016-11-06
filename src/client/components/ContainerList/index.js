import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Loading from '../Loading'
import Container from './Container'
import OptionsBar from './OptionsBar'

const GetContainers = gql`
  query GetContainers($filterType: String) {
    containerList(filter: $filterType) {
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
  const containers = containerList && containerList.map(c => {
    return <Container key={c.id} {...c} />
  })
  return (
    <div>
      <OptionsBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {containers}
      </div>
    </div>
  )
}

const enhancer = compose(
  withRouter,
  connect(
    ({ rootReducer }) => ({ filter: rootReducer.filter })
  ),
  graphql(GetContainers, {
    options: ({ filter }) => ({
      variables: {
        filterType: filter
      }
    })
  })
)

export default enhancer(ContainerList)
