import React from 'react'
import { Input } from 'semantic-ui-react'

const inputHander = e => {
  const value = e.target.value
  console.log(value)
}

const TextFilter = () => {
  return (
    <Input
      fluid
      placeholder='Filter by id, name or image...'
      onInput={inputHander}
    />
  )
}

export default TextFilter
