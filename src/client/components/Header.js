import React from 'react'
import colors from '../colors'

const style = {
  background: colors.secondary,
  color: '#fff',
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '20px'
}

const Header = () => (
  <div style={style}>Header</div>
)

export default Header
