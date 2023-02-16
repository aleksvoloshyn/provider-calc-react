import styled from 'styled-components'
// let color = '#8C92AC'

export const StyledTitle = styled.p`
  display: flex;
  color: ${(props) => props.color};
  font-weight: 700;
`
/* color: ${(props) => (props.color ? props.color : '#8C92AC')}; */
