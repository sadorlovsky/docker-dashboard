import React from 'react'
import { Input } from 'semantic-ui-react'
import Filter from './Filter'
import View from './View'

const OptionsBar = () => (
  <div style={{ margin: '10px', display: 'flex' }}>
    <div style={{ width: '262.75px', marginRight: '20px' }}>
      <Filter />
    </div>
    <div style={{ width: '200px', marginRight: '20px' }}>
      <Input fluid placeholder='Filter by id, name or image...' />
    </div>
    <div>
      <View />
    </div>
  </div>
)

export default OptionsBar
