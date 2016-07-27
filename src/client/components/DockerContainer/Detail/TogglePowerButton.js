import React from 'react'
import css from 'react-css-modules'
import styles from './TogglePowerButton.sss'

const TogglePowerButton = ({ data, status, handleOn, handleOff }) => {
  const text = status ? 'stop' : 'start'
  return (
    <button
      styleName={text}
      onClick={() => {
        const action = status ? handleOff : handleOn
        action().then(() => data.refetch())
      }}
    >
      {text} container
    </button>
  )
}

export default css(TogglePowerButton, styles)
