import React from 'react'
import { graphql } from 'react-apollo'
import { compose } from 'redux'
import { connect } from 'react-redux'
import fuzzysearch from 'fuzzysearch'
import getContainers from '../../queries/getContainers'
import Loading from '../Loading'
import OptionsBar from './OptionsBar'
import Grid from './Grid'
import List from './List'

const ContainerList = ({ data: { loading, containerList }, stateFilter, textFilter, view }) => {
  if (loading) {
    return (<Loading />)
  }

  const textFilterCond = x => {
    const name = x.name.toLowerCase()
    const image = x.image.name.toLowerCase()
    const id = x.id.toLowerCase()
    const soughtFor = textFilter.toLowerCase()
    return fuzzysearch(soughtFor, name) || fuzzysearch(soughtFor, image) || fuzzysearch(soughtFor, id)
  }

  const stateFilterCond = x => {
    if (stateFilter === 'running') {
      return x.running === true
    }
    if (stateFilter === 'stopped') {
      return x.running === false
    }
    return true
  }

  const predicate = textFilter ? textFilterCond : stateFilterCond

  const containers = containerList && containerList
    .filter(predicate)
    // .map(c => {
    //   return view === 'grid'
    //     ? <GridContainer key={c.id} {...c} />
    //     : <ListContainer key={c.id} {...c} />
    // })
  return (
    <div>
      <OptionsBar />
      {view === 'grid' ? <Grid containers={containers} /> : <List containers={containers} />}
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
