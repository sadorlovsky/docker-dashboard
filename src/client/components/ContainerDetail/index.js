import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from '../Loading'

const MyQuery = gql`
  query getContainer($id: String!) {
    container(id: $id) {
      id
      name,
      image {
        name
      },
      running
    }
  }
`

const ContainerDetail = ({ data: { loading, container } }) => {
  return (
    loading
    ? <Loading />
    : (
      <div>
        {container.name}
      </div>
    )
  )
}

export default graphql(MyQuery, {
  options ({ params: { id } }) {
    return {
      variables: {
        id
      }
    }
  }
})(ContainerDetail)
