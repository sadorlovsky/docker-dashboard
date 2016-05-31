import React from 'react'
import { connect } from 'react-apollo'
import gql from 'apollo-client/gql'
import css from 'react-css-modules'
import Container from './Container'
import styles from './ContainerList.sss'

const ContainerList = ({ data }) => {
  if (data.loading) {
    return <div>...loading</div>
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

export default connect({
  mapQueriesToProps
})(css(ContainerList, styles))
