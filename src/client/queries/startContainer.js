import gql from 'graphql-tag'

export default gql`
  mutation startContainer($id: String!) {
    startContainer(id: $id) {
      id
      running
      state
    }
  }
`
