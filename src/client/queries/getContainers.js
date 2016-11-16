import gql from 'graphql-tag'

export default gql`
  query getContainers {
    containerList {
      id
      name
      image {
        name
      }
      running
      created
      state
      status
    }
  }
`
