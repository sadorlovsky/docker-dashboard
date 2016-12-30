import gql from 'graphql-tag'

export default gql`
  mutation renameContainer($id: String!, $name: String!) {
    restartContainer(id: $id, name: $name) {
      id
      name
    }
  }
`
