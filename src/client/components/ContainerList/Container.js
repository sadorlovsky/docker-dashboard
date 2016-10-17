import React from 'react'
import { Label } from 'semantic-ui-react'
import { shorten } from '../../helpers'
import ContainerIcon from './ContainerIcon'

const style = {
  background: '#fff',
  borderRadius: '2px',
  width: '200px',
  margin: '10px'
}

const Container = ({ id, name, image, running }) => (
  <div style={style}>
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
    <div style={{ background: '#96C3CE', color: '#FFF', textAlign: 'center', padding: '5px' }}>
      {shorten(id)}
    </div>
  </div>
)

export default Container
