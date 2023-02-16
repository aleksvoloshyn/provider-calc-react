import styled from 'styled-components'

export const StyledRanges = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  @media all and (orientation: portrait) {
    display: block;
    margin-bottom: 130px;
  }
`
export const DiskValue = styled.p`
  min-width: fit-content;
`
