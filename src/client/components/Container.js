import React from 'react'

const style = {
  border: '1px solid #000',
  padding: '10px',
  marginBottom: '10px',
  fontSize: '2rem'
}

const spa = {
  color: '#ccc'
}

const Container = ({ container }) => {
  return (
    <div style={style}>
      <div>id: {container.id.substring(0, 12)}</div>
      <div>name: {container.name}</div>
      <div>
        image: <span style={spa}>{container.image}</span>
      </div>
    </div>
  )
}

export default Container
