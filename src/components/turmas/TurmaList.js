import React from 'react'
import TurmaSummary from './TurmaSummary'

const TurmaList = ({turmas}) => {
  return (
    <div className="turma-list section">
      { turmas && turmas.map(turma => {
        return (
          <TurmaSummary turma={turma} key={turma.id} />
        )
      })}  
    </div>
  )
}

export default TurmaList