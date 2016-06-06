import React from 'react'
import { connect } from 'react-apollo'
import gql from 'apollo-client/gql'
import css from 'react-css-modules'
import Spinner from 'react-spinkit'
import compose from 'recompose/compose'
import Container from './Container'
import styles from './List.sss'

const ContainerList = ({ data }) => {
  if (data.loading) {
    return (
      <div styleName='loading'>
        <Spinner spinnerName='wandering-cubes' />
      </div>
    )
  }
  const containers = data.getContainerList.map(container => {
    return <Container key={container.id} container={container} />
  })
  return (
    <div styleName='list'>
      {containers}
    </div>
  )
}

const mapQueriesToProps = () => {
  return {
    data: {
      query: gql`
        query Query {
          getContainerList {
            id
            name
            image
            imageId
            running
            command
          }
        }
      `,
      forceFetch: false
    }
  }
}

const enchance = compose(
  connect({ mapQueriesToProps }),
  css(styles)
)

export default enchance(ContainerList)
