import Providers from '../Providers/Providers'
import Diagram from '../Diagram'
import { StyledProvidersBoard } from './styledProvidersBoard'

const ProvidersBoard = () => {
  return (
    <StyledProvidersBoard>
      <Providers></Providers>
      <Diagram></Diagram>
    </StyledProvidersBoard>
  )
}

export default ProvidersBoard
