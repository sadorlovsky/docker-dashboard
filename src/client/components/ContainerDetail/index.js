import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Button, Icon, Segment, Input } from 'semantic-ui-react'
import { compose } from 'redux'
import { style } from 'glamor'
import {
  getContainer,
  stopContainer,
  startContainer,
  restartContainer,
  renameContainer
} from '../../queries'
import Loading from '../Loading'

const styles = {
  container: style({
    padding: '10px',
    borderRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }),
  name: style({
    borderBottom: '1px dashed #ccc',
    ':hover': {
      borderBottom: '2px dashed #ccc'
    }
  })
}

class ContainerDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editName: false
    }
    this.handleNameEdit = this.handleNameEdit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleNameEdit () {
    this.setState({
      editName: true
    })
  }

  handleKeyDown ({ charCode }) {
    if (charCode === '13') {
      this.props.restart()
        .then(() => {
          this.setState({
            editName: false
          })
        })
    }
  }

  render () {
    const { data: { loading, container }, start, stop, restart } = this.props
    console.log(container)
    return (
      loading ? <Loading /> : (
        <div {...styles.container}>
          {this.state.editName ? (
            <Input onKeyPress={this.handleKeyDown} placeholder='Enter new name for the container' />
          ) : (
            <h1><span {...styles.name} onDoubleClick={this.handleNameEdit}>{container.name}</span></h1>
          )}
          <div>{container.status}</div>
          <Segment inverted>{container.id}</Segment>
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
            <Button onClick={restart}>
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
  graphql(renameContainer, {
    name: 'rename',
    options ({ params: { id, name } }) {
      return {
        variables: {
          id,
          name
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
