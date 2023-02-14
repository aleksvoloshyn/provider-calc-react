import Container from '../Container/Container'
import Maintitle from '../Maintitle'
import Ranges from '../Ranges'
import ProvidersBoard from '../ProvidersBoard'
import './App.css'

function App() {
  return (
    <div className="App">
      <Container>
        <Maintitle title="tarif calculation:" />
        <Ranges></Ranges>
        <ProvidersBoard></ProvidersBoard>
      </Container>
    </div>
  )
}

export default App
