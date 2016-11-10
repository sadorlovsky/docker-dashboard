import gql from 'graphql-tag'

export default gql`
  query GetContainers($filterType: String) {
    containerList(filter: $filterType) {
      id
      name,
      image {
        name
      },
      running
    }
  }
`
