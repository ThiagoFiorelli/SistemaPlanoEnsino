import React from 'react'

const CursoSummary = ({curso}) => {
  return (
    <div className="card z-depth-0 curso-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{curso.nome}</span>
        <p>Posted by The Net Ninja</p>
        <p className="grey-text">3rd September, 3am</p>
      </div>
    </div>
  )
}

export default CursoSummary