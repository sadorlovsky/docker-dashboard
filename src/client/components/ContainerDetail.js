import React from 'react'
import { connect } from 'react-apollo'
import gql from 'apollo-client/gql'
import Spinner from 'react-spinkit'
import Container from './Container'

const ContainerDetail = ({ data }) => {
  if (data.loading) {
    return <Spinner spinnerName='wandering-cubes' noFadeIn />
  }
  return <Container container={data.getContainer} />
}

const mapQueriesToProps = ({ ownProps }) => {
  return {
    data: {
      query: gql`
        query Query($containerId: String!) {
          getContainer(id: $containerId) {
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
})(ContainerDetail)
