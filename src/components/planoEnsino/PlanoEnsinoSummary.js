import React from 'react'

const PlanoEnsinoSummary = ({planoensino}) => {
  return (
    <div className="card z-depth-0 planoensino-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{planoensino.nome}</span>
        <p>Posted by The Net Ninja</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default PlanoEnsinoSummary