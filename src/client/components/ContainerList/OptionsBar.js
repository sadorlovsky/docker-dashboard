import React from 'react'
import StateFilter from './StateFilter'
import TextFilter from './TextFilter'
import View from './View'

const OptionsBar = () => (
  <div style={{ margin: '10px', display: 'flex' }}>
    <div style={{ width: '262.75px', marginRight: '20px' }}>
      <StateFilter />
    </div>
    <div style={{ width: '262.75px', marginRight: '20px' }}>
      <TextFilter />
    </div>
    <div>
      <View />
    </div>
  </div>
)

export default OptionsBar
