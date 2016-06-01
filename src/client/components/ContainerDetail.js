import React from 'react'
import { connect } from 'react-apollo'
import css from 'react-css-modules'
import gql from 'apollo-client/gql'
import Spinner from 'react-spinkit'
import styles from './ContainerDetail.sss'

const ContainerDetail = ({ data }) => {
  if (data.loading) {
    return <Spinner spinnerName='wandering-cubes' noFadeIn />
  }
  return (
    <div>
      <div styleName='container'>
        <div>ID: {data.container.id}</div>
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

export default connect({
  mapQueriesToProps
})(css(ContainerDetail, styles))
