import React from 'react'

const MateriaSummary = ({materia}) => {
  return (
    <div className="card z-depth-0 materia-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{materia.nome}</span>
        <p>Posted by The Net Ninja</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default MateriaSummary