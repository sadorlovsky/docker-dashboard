import React from 'react'
import { Table, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { includes } from 'lodash'
import { selectContainer, unselectContainer } from '../../../actions'
import { RunningColumn } from './RunningColumn'
import IdColumn from './IdColumn'
import CreatedColumn from './CreatedColumn'
import ActionsBar from './ActionsBar'

const List = ({ containers, selectedContainers, select, unselect }) => {
  return (
    <div style={{ margin: '20px 10px' }}>
      <Table singleLine selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>State</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {containers.map(c => (
            <Table.Row key={c.id}>
              <Table.Cell collapsing onClick={e => console.log('with shift:', e.shiftKey)}>
                <Checkbox
                  onChange={(e, { checked }) => { return checked ? select(c.id) : unselect(c.id) }}
                  checked={includes(selectedContainers, c.id)}
                />
              </Table.Cell>
              <Table.Cell>
                <IdColumn data={c.id} />
              </Table.Cell>
              <Table.Cell>
                <RunningColumn running={c.running} state={c.state} />
              </Table.Cell>
              <Table.Cell>{c.name}</Table.Cell>
              <Table.Cell>{c.image.name}</Table.Cell>
              <Table.Cell>
                <CreatedColumn data={c.created} />
              </Table.Cell>
              <Table.Cell>{c.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <ActionsBar />
    </div>
  )
}

const mapStateToProps = ({ rootReducer }) => ({
  selectedContainers: rootReducer.selectedContainers
})

const mapDispatchToProps = dispatch => ({
  select (id) {
    return dispatch(selectContainer(id))
  },
  unselect (id) {
    return dispatch(unselectContainer(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
