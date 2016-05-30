import React from 'react'
import { connect } from 'react-apollo'
import gql from 'apollo-client/gql'
import Container from './Container'

const ContainerList = ({ data }) => {
  if (data.loading) {
    return <div>...loading</div>
  }
  const containers = data.getContainerList.map(container => {
    return <Container key={container.id} container={container} />
  })
  return (
    <div>
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
          }
        }
      `,
      forceFetch: false
    }
  }
}

export default connect({ mapQueriesToProps })(ContainerList)
