import Form from 'react-bootstrap/Form'
import { useState } from 'react'

import { StyledRanges } from './styledRanges'

const Ranges = () => {
  const [storageValue, setStorageValue] = useState(0)
  const [transferValue, setTransferValue] = useState(0)

  const storageHandler = (e) => {
    setStorageValue(e.target.value)
  }
  const transferHandler = (e) => {
    setTransferValue(e.target.value)
  }

  return (
    <StyledRanges>
      <Form.Label>Storage:</Form.Label>
      {storageValue !== 0 && <b>{storageValue}</b>}
      <Form.Range
        value={storageValue}
        onChange={storageHandler}
        step={1}
        min={0}
        max={1000}
      />
      <Form.Label>Transfer:</Form.Label>
      {transferValue !== 0 && <b>{transferValue}</b>}

      <Form.Range
        value={transferValue}
        onChange={transferHandler}
        step={1}
        min={0}
        max={1000}
      />
    </StyledRanges>
  )
}

export default Ranges
