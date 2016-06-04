import React from 'react'
import { connect } from 'react-apollo'
import css from 'react-css-modules'
import gql from 'apollo-client/gql'
import Spinner from 'react-spinkit'
import { toggleId } from '../actions'
import { shortenId } from '../helpers'
import styles from './ContainerDetail.sss'

const ContainerDetail = ({ data, showFullId, handleClick }) => {
  if (data.loading) {
    return <Spinner spinnerName='wandering-cubes' noFadeIn />
  }
  const showIdType = showFullId ? 'short' : 'full'
  return (
    <div>
      <div styleName='container'>
        <div>
          ID: {showFullId ? data.container.id : shortenId(data.container.id)}
          <button onClick={() => handleClick()}>{showIdType}</button>
        </div>
        <div>NAME: {data.container.name}</div>
        <div>IMAGE: {data.container.image}</div>
        <div>RUNNING: {data.container.running.toString()}</div>
        <div>COMMAND: {data.container.command}</div>
      </div>
      <div>
        <button>{data.container.running ? 'stop' : 'start'}</button>
      </div>
    </div>
  )
}

const mapQueriesToProps = ({ ownProps }) => {
  return {
    data: {
      query: gql`
        query Query($containerId: String!) {
          container: getContainer(id: $containerId) {
            id
            name
            image
            imageId
            running
            command
          }
        }
      `,
      variables: {
        containerId: ownProps.routeParams.containerId
      },
      forceFetch: false
    }
  }
}

const mapStateToProps = state => ({
  showFullId: state.rootReducer.showFullId
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(toggleId())
  }
})

export default connect({
  mapQueriesToProps,
  mapStateToProps,
  mapDispatchToProps
})(css(ContainerDetail, styles))
