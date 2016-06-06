import React from 'react'
import { connect } from 'react-apollo'
import css from 'react-css-modules'
import gql from 'apollo-client/gql'
import Spinner from 'react-spinkit'
import compose from 'recompose/compose'
import { toggleId } from '../../../actions'
import ContainerId from './ContainerId'
import ToggleIdButton from './ToggleIdButton'
import styles from './Detail.sss'

const ContainerDetail = ({ data, showFullId, handleClick }) => {
  if (data.loading) {
    return <Spinner spinnerName='wandering-cubes' />
  }
  return (
    <div>
      <div styleName='container'>
        <div styleName='name'>{data.container.name}</div>
        <div>
          <ContainerId id={data.container.id} showFullId={showFullId} />
          <ToggleIdButton showFullId={showFullId} handleClick={handleClick} />
        </div>
        <div>IMAGE: {data.container.image}</div>
        <div>RUNNING: {data.container.running.toString()}</div>
        <div>COMMAND: {data.container.command}</div>
      </div>
      <div>
        <button>{data.container.running ? 'stop' : 'start'}</button>
      </div>
    </div>
  )
}

const mapQueriesToProps = ({ ownProps }) => {
  return {
    data: {
      query: gql`
        query Query($containerId: String!) {
          container: getContainer(id: $containerId) {
            id
            name
            image
            imageId
            running
            command
          }
        }
      `,
      variables: {
        containerId: ownProps.routeParams.containerId
      },
      forceFetch: false
    }
  }
}

const mapStateToProps = state => ({
  showFullId: state.rootReducer.showFullId
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(toggleId())
  }
})

const enchance = compose(
  connect({
    mapQueriesToProps,
    mapStateToProps,
    mapDispatchToProps
  }),
  css(styles)
)

export default enchance(ContainerDetail)
