import React from 'react'
import MateriaSummary from './MateriaSummary'

const MateriaList = ({ materias }) => {
  return (
    <div className="materia-list section">
      { materias && materias.map(materia => {
        return (
          <MateriaSummary materia={materia} key={materia.id} />
        )
      })}  
    </div>
  )
}

export default MateriaList