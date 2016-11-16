import gql from 'graphql-tag'

export default gql`
  query getContainer($id: String!) {
    container(id: $id) {
      id
      name
      image {
        name
      }
      running
      state
    }
  }
`
