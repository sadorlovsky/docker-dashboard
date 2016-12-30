import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Button, Icon, Label, Popup, Segment, Input } from 'semantic-ui-react'
import { compose } from 'redux'
import { style } from 'glamor'
import getContainer from '../../queries/getContainer'
import stopContainer from '../../queries/stopContainer'
import startContainer from '../../queries/startContainer'
import restartContainer from '../../queries/restartContainer'
import renameContainer from '../../queries/renameContainer'
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

  handleSaveName () {

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
    const { data: { loading, container }, start, stop } = this.props
    return (
      loading ? <Loading /> : (
        <div {...styles.container}>
          {this.state.editName ? (
            <Input onKeyPress={this.handleKeyDown} placeholder='Enter new name for the container' />
          ) : (
            <h1><span {...styles.name} onDoubleClick={this.handleNameEdit}>{container.name}</span></h1>
          )}
          <span style={{ margin: '0 5px' }} />
          <Popup
            trigger={container.running ? <Label circular empty color='green' /> : <Label circular empty color='grey' />}
            content={container.running ? 'Container is running' : `Container is ${container.state}`}
            inverted
          />
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
