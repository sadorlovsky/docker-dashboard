import React from 'react'

const ToggleIdButton = ({ showFullId, handleClick }) => {
  const showIdType = showFullId ? 'short' : 'full'
  return (
    <button
      styleName='toggle-id'
      onClick={handleClick}
    >
      {showIdType}
    </button>
  )
}

export default ToggleIdButton
