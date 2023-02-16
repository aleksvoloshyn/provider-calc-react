import { useState } from 'react'
import { StyledRadio, StyledInput } from './styledRadio'

const Radio = ({ label, diskTypeHandler, value, name, checked }) => {
  return (
    <StyledRadio>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        onChange={diskTypeHandler}
        checked={checked}
      />
      {label}
    </StyledRadio>
  )
}

export default Radio
