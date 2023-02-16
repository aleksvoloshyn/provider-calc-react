import { v4 as uuidv4 } from 'uuid'
import { StyledDiagram } from './styledDiagram'
import { orgs } from '../../data/providersData'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Diagram = ({ backblazeTotal, bunnyTotal, scalewayTotal, vultrTotal }) => {
  let min = Math.min(backblazeTotal, bunnyTotal, scalewayTotal, vultrTotal)
  let max = Math.max(backblazeTotal, bunnyTotal, scalewayTotal, vultrTotal)

  return (
    <StyledDiagram>
      {orgs.map((prov) => {
        let now
        let variant
        let animated = false

        if (prov.total === 'backblazeTotal') {
          now = backblazeTotal
        }
        if (prov.total === 'bunnyTotal') {
          now = bunnyTotal
        }
        if (prov.total === 'scalewayTotal') {
          now = scalewayTotal
        }
        if (prov.total === 'vultrTotal') {
          now = vultrTotal
        }

        if (now > min) {
          variant = prov.defVariant
        } else {
          variant = prov.variant
          animated = true
        }

        return (
          <ProgressBar
            key={uuidv4()}
            now={now}
            label={now}
            variant={variant}
            max={max}
            className="progress-modi "
            animated={animated}
          ></ProgressBar>
        )
      })}
    </StyledDiagram>
  )
}

export default Diagram
