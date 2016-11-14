import React from 'react'
import { graphql } from 'react-apollo'
import { Button } from 'semantic-ui-react'
import { compose } from 'redux'
import * as L from 'partial.lenses'
import R from 'ramda'
import getContainer from '../../queries/getContainer'
import stopContainer from '../../queries/stopContainer'
import startContainer from '../../queries/startContainer'
import Loading from '../Loading'

const ContainerDetail = ({ data: { loading, container }, start, stop }) => {
  return (
    loading
    ? <Loading />
    : (
    <div>
      <div>{container.id}</div>
      <div>{container.running.toString()}</div>
      <div>{container.state}</div>
      {container.running ? (
        <Button onClick={stop}>stop</Button>
      ) : (
      <Button onClick={start}>start</Button>
      )}
    </div>
    )
  )
}

const enhancer = compose(
  graphql(startContainer, {
    name: 'start',
    options ({ params: { id } }) {
      return {
        variables: {
          id
        },
        updateQueries: {
          getContainers: (prev, { mutationResult }) => {
            const container = L.find(
              R.whereEq({ id: mutationResult.data.startContainer.id })
            )
            const data = L.remove(
              container,
              prev.containerList
            )
            return {
              containerList: data
            }
          }
        }
      }
    }
  }),
  graphql(stopContainer, {
    name: 'stop',
    options ({ params: { id } }) {
      return {
        variables: {
          id
        },
        updateQueries: {
          getContainers: (prev, { mutationResult, queryVariables }) => {
            console.log('STOP!', queryVariables)
          }
        }
      }
    }
  }),
  graphql(getContainer, {
    options ({ params: { id } }) {
      return {
        variables: {
          id
        }
      }
    }
  })
)

export default enhancer(ContainerDetail)
