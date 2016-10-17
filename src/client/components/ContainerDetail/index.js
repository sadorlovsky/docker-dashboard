import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from 'halogen/PulseLoader'
// import { Cond, T, isUndefined, not } from 'react-cond'

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
    ? <Spinner color='#26A65B' size='16px' margin='4px' />
    : (
      <div>
        {container.name}
      </div>
    )
    // <Cond value={container}>
    //   {[not(isUndefined), <div>{container.name}</div>]}
    //   {[T, <div>loading</div>]}
    // </Cond>
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
