import gql from 'graphql-tag'

export default gql`
  query getContainers($filterType: String) {
    containerList(filter: $filterType) {
      id
      name,
      image {
        name
      },
      running,
      created,
      state,
      status
    }
  }
`
