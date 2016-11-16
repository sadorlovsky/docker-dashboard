import React from 'react'
import { graphql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import R from 'ramda'
import getContainers from '../../queries/getContainers'
import Loading from '../Loading'
import GridContainer from './GridContainer'
import ListContainer from './ListContainer'
import OptionsBar from './OptionsBar'

const ContainerList = ({ data: { loading, containerList }, stateFilter, textFilter, view }) => {
  if (loading) {
    return (<Loading />)
  }
  const containers = containerList && containerList
    // .filter(c => {
    //   if (stateFilter === 'running') {
    //     return c.running === true
    //   }
    //   if (stateFilter === 'stopped') {
    //     return c.running === false
    //   }
    //   return c
    // })
    .filter(c => {
      if (textFilter) {
        const name = c.name.toLowerCase()
        const image = c.image.name.toLowerCase()
        const id = c.id.toLowerCase()
        const soughtFor = textFilter.toLowerCase()
        return name.includes(soughtFor) || image.includes(soughtFor) || id.includes(soughtFor)
      }
      return c
    })
    .map(c => {
      return view === 'grid'
        ? <GridContainer key={c.id} {...c} />
        : <ListContainer key={c.id} {...c} />
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

const mapStateToProps = ({ rootReducer }) => ({
  stateFilter: rootReducer.stateFilter,
  textFilter: rootReducer.textFilter,
  view: rootReducer.view
})

const enhancer = compose(
  connect(mapStateToProps),
  graphql(getContainers)
)

export default enhancer(ContainerList)
