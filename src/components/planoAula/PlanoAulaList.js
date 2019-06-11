import React from 'react'
import PlanoAulaSummary from './PlanoAulaSummary'

const PlanoAulaList = ({planosaula}) => {
  return (
    <div className="planoaula-list section">
      { planosaula && planosaula.map(planoaula => {
        return (
          <PlanoAulaSummary planoaula={planoaula} key={planoaula.id} />
        )
      })}  
    </div>
  )
}

export default PlanoAulaList