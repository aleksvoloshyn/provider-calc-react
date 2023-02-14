import { StyledProvider } from './styledProvider'
import Title from '../Title/Title'

const Provider = () => {
  return (
    <StyledProvider>
      <Title title="backblaze"></Title>
      <Title title="bunny"></Title>
      <Title title="scaleway"></Title>
      <Title title="vultr"></Title>
    </StyledProvider>
  )
}

export default Provider
