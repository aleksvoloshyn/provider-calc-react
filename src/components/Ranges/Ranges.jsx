import Form from 'react-bootstrap/Form'

import { StyledRanges, DiskValue } from './styledRanges'

const Ranges = ({
  storageValue,
  transferValue,
  storageHandler,
  transferHandler,
}) => {
  return (
    <StyledRanges>
      <Form.Label>Storage:</Form.Label>
      {storageValue !== 0 && (
        <DiskValue>
          {storageValue}
          <b> GB</b>
        </DiskValue>
      )}
      <Form.Range
        value={storageValue}
        onChange={storageHandler}
        step={1}
        min={0}
        max={1000}
      />
      <Form.Label>Transfer:</Form.Label>
      {transferValue !== 0 && (
        <DiskValue>
          {transferValue}
          <b> GB</b>
        </DiskValue>
      )}
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
