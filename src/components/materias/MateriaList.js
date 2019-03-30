import React from 'react'
import MateriaSummary from './MateriaSummary'
import { Link } from 'react-router-dom';

const MateriaList = ({materias}) => {
  return (
    <div className="materia-list section">
      { materias && materias.map(materia => {
        return (
          <Link to={'/materia/' + materia.id}>
            <MateriaSummary materia={materia} key={materia.id} />
          </Link>
        )
      })}  
    </div>
  )
}

export default MateriaList