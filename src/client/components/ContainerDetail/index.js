import React from 'react'
import { graphql } from 'react-apollo'
import { Button, Icon, Label, Popup } from 'semantic-ui-react'
import { compose } from 'redux'
import { style } from 'glamor'
import getContainer from '../../queries/getContainer'
import stopContainer from '../../queries/stopContainer'
import startContainer from '../../queries/startContainer'
import restartContainer from '../../queries/restartContainer'
import Loading from '../Loading'

const styles = style({
  padding: '10px',
  borderRadius: '3px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const ContainerDetail = ({ data: { loading, container }, start, stop }) => {
  return (
    loading ? <Loading /> : (
      <div {...styles}>
        <h1>
          {container.name}
          <Popup
            trigger={container.running ? <Label circular empty color='green' /> : <Label circular empty color='grey' />}
            content={container.running ? 'Container is running' : `Container is ${container.state}`}
            inverted
          />
        </h1>
        <div>ID: <pre>{container.id}</pre></div>
        <div>
          {container.running ? (
            <Button onClick={stop}>
              <Icon name='stop' /> Stop
            </Button>
          ) : (
            <Button onClick={start}>
              <Icon name='play' /> Start
            </Button>
          )}
          <Button>
            <Icon name='refresh' /> Restart
          </Button>
          <Button negative>
            <Icon name='trash outline' /> Delete
          </Button>
        </div>
        <div />
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
        }
      }
    }
  }),
  graphql(restartContainer, {
    name: 'restart',
    options ({ params: { id } }) {
      return {
        variables: {
          id
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
