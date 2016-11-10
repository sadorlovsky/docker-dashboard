import React from 'react'
import { graphql } from 'react-apollo'
import getContainer from '../../queries/getContainer'
import Loading from '../Loading'
import Log from '../Log'

const ContainerDetail = ({ data: { loading, container } }) => {
  return (
    loading
    ? <Loading />
    : (
      <div>
        <div>{container.id}</div>
        <div>
          <Log />
        </div>
      </div>
    )
  )
}

export default graphql(getContainer, {
  options ({ params: { id } }) {
    return {
      variables: {
        id
      }
    }
  }
})(ContainerDetail)
