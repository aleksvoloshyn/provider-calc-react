import styled from 'styled-components'
const StyledContainer = styled.div`
  font-family: Montserrat;
  width: 580px;
  /* height: 362px; */
  padding: 0px 10px;
  padding-bottom: 12px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 10px;
  box-shadow: -3px 0px 14px 5px rgb(186 186 186 / 91%);
  border-radius: 12px;

  @media all and (orientation: portrait) {
    /* transform: rotate(-90deg); */
    margin-top: 100px;
    width: auto;
    height: 800px;
    margin-top: 0;
  }
`

export { StyledContainer }
