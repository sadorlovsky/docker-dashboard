import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from '../Loading'
import Log from '../Log'

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
        <Log />
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
