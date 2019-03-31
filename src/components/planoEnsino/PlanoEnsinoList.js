import React from 'react'
import PlanoEnsinoSummary from './PlanoEnsinoSummary'

const PlanoEnsinoList = ({planosensino}) => {
  return (
    <div className="planoensino-list section">
      { planosensino && planosensino.map(planoensino => {
        return (
          <PlanoEnsinoSummary planoensino={planoensino} key={planoensino.id} />
        )
      })}  
    </div>
  )
}

export default PlanoEnsinoList