import React from 'react'
import { Table, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectContainer } from '../../../actions'
import { RunningColumn } from './RunningColumn'
import IdColumn from './IdColumn'
import CreatedColumn from './CreatedColumn'
import ActionsBar from './ActionsBar'

const List = ({ containers, onChange }) => {
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
                <Checkbox onChange={() => onChange(c.id)} />
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
  onChange (id) {
    return dispatch(selectContainer(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
