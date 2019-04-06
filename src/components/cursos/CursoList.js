import React from 'react'
import CursoSummary from './CursoSummary'
import { Link } from 'react-router-dom';

const CursoList = ({cursos}) => {
  return (
    <div className="curso-list section">
      { cursos && cursos.map(curso => {
        return (
          <Link to={'/curso/' + curso.id} key={curso.id}>
            <CursoSummary curso={curso} />
          </Link>
        )
      })}  
    </div>
  )
}

export default CursoList