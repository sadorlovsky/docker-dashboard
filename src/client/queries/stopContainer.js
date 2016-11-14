import gql from 'graphql-tag'

export default gql`
  mutation stopContainer($id: String!) {
    stopContainer(id: $id) {
      id
      running
      state
    }
  }
`
