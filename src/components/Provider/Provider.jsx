import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Radio from '../Radio/Radio'
import {
  StyledProvider,
  StyledProviderWrapper,
  StyledLabelWrapper,
  StyledLogo,
} from './styledProvider'
import Title from '../Title/Title'

const Provider = ({ name, color, img, children }) => {
  return (
    <StyledProvider key={uuidv4()}>
      <StyledProviderWrapper>
        <Title title={name} color={color}></Title>
        <StyledLabelWrapper>{children}</StyledLabelWrapper>
      </StyledProviderWrapper>
      <StyledLogo src={img} alt={name} width="32" height="32" />
    </StyledProvider>
  )
}

export default Provider
