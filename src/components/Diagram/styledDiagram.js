import styled from 'styled-components'

export const StyledDiagram = styled.div`
  border-left: 1px solid rgba(83, 80, 78, 0.2);
  height: auto;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  @media all and (orientation: portrait) {
    gap: 20px;
  }
`
