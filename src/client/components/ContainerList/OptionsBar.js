import React from 'react'
import Filter from './Filter'
import TextFilter from './TextFilter'
import View from './View'

const OptionsBar = () => (
  <div style={{ margin: '10px', display: 'flex' }}>
    <div style={{ width: '262.75px', marginRight: '20px' }}>
      <Filter />
    </div>
    <div style={{ width: '200px', marginRight: '20px' }}>
      <TextFilter />
    </div>
    <div>
      <View />
    </div>
  </div>
)

export default OptionsBar
