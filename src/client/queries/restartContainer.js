import gql from 'graphql-tag'

export default gql`
  mutation restartContainer($id: String!) {
    restartContainer(id: $id) {
      id
      running
      state
    }
  }
`
