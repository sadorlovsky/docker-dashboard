import React from 'react'
import { Label } from 'semantic-ui-react'
import { withRouter } from 'react-router'
import { style } from 'glamor'
import { shorten } from '../../helpers'
import ContainerIcon from './ContainerIcon'

const styles = style({
  background: '#fff',
  borderRadius: '2px',
  margin: '10px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  ':hover': {
    cursor: 'pointer',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },
  flex: '1',
  minWidth: '250px'
})

const Container = ({ id, name, image, running, router }) => (
  <div {...styles} onClick={() => router.push(`/container/${id}`)}>
    <div style={{ padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '18px' }}>{name}</div>
        <div>{running ? <Label circular empty color='green' /> : <Label circular empty color='grey' />}</div>
      </div>
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ContainerIcon name={image.name} />
        <div>{image.name}</div>
      </div>
    </div>
    <div style={{ background: '#7C7287', color: '#FFF', textAlign: 'center', padding: '5px' }}>
      {shorten(id)}
    </div>
  </div>
)

export default withRouter(Container)
