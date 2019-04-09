import React from 'react'
import CursoSummary from './CursoSummary'

const CursoList = ({cursos}) => {
  return (
    <div className="curso-list section">
      { cursos && cursos.map(curso => {
        return (
          <CursoSummary curso={curso} key={curso.id} />
        )
      })}  
    </div>
  )
}

export default CursoList