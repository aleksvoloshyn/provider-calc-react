import { useState, useEffect } from 'react'
import Container from '../Container'
import Maintitle from '../Maintitle'
import Ranges from '../Ranges'
import ProvidersBoard from '../ProvidersBoard'
import Providers from '../Providers/Providers'
import Provider from '../Provider/Provider'
import Radio from '../Radio/Radio'
import Diagram from '../Diagram'
import { orgs } from '../../data/providersData'
import './App.css'

function App() {
  const [storageValue, setStorageValue] = useState(0)
  const [transferValue, setTransferValue] = useState(0)
  const [bunny, setBunny] = useState('hdd')
  const [scaleway, setScaleway] = useState('multi')
  const [bunnyRate, setBunnyRate] = useState(0.01)
  const [scalewayRate, setScalewayRate] = useState(0.06)

  const [backblazeTotal, setBackblazeTotal] = useState(0)
  const [bunnyTotal, setBunnyTotal] = useState(0)
  const [scalewayTotal, setScalewayTotal] = useState(0)
  const [vultrTotal, setVultrTotal] = useState(0)

  useEffect(() => {
    return setBackblazeTotal(
      (storageValue * 0.005 + transferValue * 0.01 < 7
        ? 7
        : storageValue * 0.005 + transferValue * 0.01
      ).toFixed(2)
    )
  }, [storageValue, transferValue])

  useEffect(() => {
    return setBunnyTotal(
      (storageValue * bunnyRate + transferValue * 0.01 > 10
        ? 10
        : storageValue * bunnyRate + transferValue * 0.01
      ).toFixed(2)
    )
  }, [storageValue, transferValue, bunnyRate])

  useEffect(() => {
    if (storageValue < 75 && transferValue > 75) {
      setScalewayTotal(((transferValue - 75) * 0.02).toFixed(2))
    }
    if (storageValue < 75 && transferValue < 75) {
      setScalewayTotal((0).toFixed(2))
    }
    if (transferValue < 75 && storageValue > 75) {
      setScalewayTotal(((storageValue - 75) * scalewayRate).toFixed(2))
    }
    if (transferValue > 75 && storageValue > 75) {
      setScalewayTotal(
        (
          (storageValue - 75) * scalewayRate +
          (transferValue - 75) * 0.02
        ).toFixed(2)
      )
    }
  }, [storageValue, scalewayRate, transferValue])

  useEffect(() => {
    return setVultrTotal(
      (storageValue * 0.01 + transferValue * 0.01 < 5
        ? 5
        : storageValue * 0.01 + transferValue * 0.01
      ).toFixed(2)
    )
  }, [storageValue, transferValue])

  const storageHandler = (e) => {
    setStorageValue(e.target.value)
  }
  const transferHandler = (e) => {
    setTransferValue(e.target.value)
  }

  const bunnyHandler = (e) => {
    setBunny(e.target.value)
    if (e.target.value === 'hdd') {
      setBunnyRate(0.01)
    }
    if (e.target.value === 'ssd') {
      setBunnyRate(0.02)
    }
  }
  const scalewayHandler = (e) => {
    setScaleway(e.target.value)
    if (e.target.value === 'multi') {
      setScalewayRate(0.06)
    }
    if (e.target.value === 'single') {
      setScalewayRate(0.03)
    }
  }

  return (
    <div className="App">
      <Container>
        <Maintitle title="tarif calculation:" />
        <Ranges
          storageValue={storageValue}
          transferValue={transferValue}
          storageHandler={storageHandler}
          transferHandler={transferHandler}
        ></Ranges>
        <ProvidersBoard>
          <Providers>
            <Provider
              name="backblaze"
              color="#ff3333"
              img={`./images/backblaze.png`}
            ></Provider>
            <Provider name="bunny" color="#fc7f29" img={`./images/bunny.png`}>
              <Radio
                label="hdd"
                diskTypeHandler={bunnyHandler}
                value="hdd"
                name="bunny"
                checked={bunny === 'hdd'}
              ></Radio>
              <Radio
                label="ssd"
                diskTypeHandler={bunnyHandler}
                value="ssd"
                name="bunny"
                checked={bunny === 'ssd'}
              ></Radio>
            </Provider>
            <Provider
              name="scaleway"
              color="#c06a90"
              img={`./images/scaleway.png`}
            >
              {' '}
              <Radio
                label="multi"
                diskTypeHandler={scalewayHandler}
                value="multi"
                name="scaleway"
                checked={scaleway === 'multi'}
              ></Radio>
              <Radio
                label="single"
                diskTypeHandler={scalewayHandler}
                value="single"
                name="scaleway"
                checked={scaleway === 'single'}
              ></Radio>
            </Provider>
            <Provider
              name="vultr"
              color="#1ac6ff"
              img={`./images/vultr.png`}
            ></Provider>
          </Providers>
          {(storageValue > 0 || transferValue > 0) && (
            <Diagram
              backblazeTotal={backblazeTotal}
              bunnyTotal={bunnyTotal}
              scalewayTotal={scalewayTotal}
              vultrTotal={vultrTotal}
            ></Diagram>
          )}
        </ProvidersBoard>
      </Container>
    </div>
  )
}

export default App
