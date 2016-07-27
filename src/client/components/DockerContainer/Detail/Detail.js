import React from 'react'
import { connect } from 'react-apollo'
import css from 'react-css-modules'
import gql from 'apollo-client/gql'
import Spinner from 'react-spinkit'
import compose from 'recompose/compose'
import DocumentTitle from 'react-document-title'
import { toggleId } from '../../../actions'
import ContainerId from './ContainerId'
import ToggleIdButton from './ToggleIdButton'
import TogglePowerButton from './TogglePowerButton'
import styles from './Detail.sss'

const ContainerDetail = ({
  data,
  showFullId,
  handleClick,
  mutations,
  startContainer
}) => {
  if (data.loading) {
    return <Spinner spinnerName='wandering-cubes' />
  }
  return (
    <DocumentTitle title={`${data.container.name} · Docker Dashboard`}>
      <div>
        <div styleName='container'>
          <div styleName='name'>{data.container.name}</div>
          <div>
            <ContainerId id={data.container.id} showFullId={showFullId} />
            <ToggleIdButton showFullId={showFullId} handleClick={handleClick} />
          </div>
          <div>IMAGE: {data.container.image}</div>
          <div>
            RUNNING: {data.container.running.toString()}
          </div>
          <div>COMMAND: {data.container.command}</div>
          <TogglePowerButton
            data={data}
            loading={startContainer.loading}
            status={data.container.running}
            handleOn={mutations.startContainer}
            handleOff={mutations.stopContainer}
          />
        </div>
      </div>
    </DocumentTitle>
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

const mapMutationsToProps = ({ ownProps }) => {
  return {
    stopContainer: () => ({
      mutation: gql`
        mutation stopContainer(
          $containerId: String!
        ) {
          stopContainer(
            id: $containerId
          ) {
            running
          }
        }
      `,
      variables: {
        containerId: ownProps.routeParams.containerId
      }
    }),
    startContainer: () => ({
      mutation: gql`
        mutation startContainer(
          $containerId: String!
        ) {
          startContainer(
            id: $containerId
          ) {
            running
          }
        }
      `,
      variables: {
        containerId: ownProps.routeParams.containerId
      }
    })
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
    mapMutationsToProps,
    mapStateToProps,
    mapDispatchToProps
  }),
  css(styles)
)

export default enchance(ContainerDetail)
