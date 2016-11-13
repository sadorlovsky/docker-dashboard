import React from 'react'
import { graphql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import getContainers from '../../queries/getContainers'
import Loading from '../Loading'
import Container from './Container'
import OptionsBar from './OptionsBar'

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
  connect(
    ({ rootReducer }) => ({
      filter: rootReducer.filter,
      view: rootReducer.view
    })
  ),
  graphql(getContainers, {
    options: ({ filter }) => ({
      variables: {
        filterType: filter
      }
    })
  })
)

export default enhancer(ContainerList)
