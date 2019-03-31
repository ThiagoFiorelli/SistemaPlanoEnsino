import React from 'react'
import PlanoEnsinoSummary from './PlanoEnsinoSummary'
import { Link } from 'react-router-dom';

const PlanoEnsinoList = ({planosensino}) => {
  return (
    <div className="planoensino-list section">
      { planosensino && planosensino.map(planoensino => {
        return (
          <Link to={'/planoensino/' + planoensino.id}>
            <PlanoEnsinoSummary planoensino={planoensino} key={planoensino.id} />
          </Link>
        )
      })}  
    </div>
  )
}

export default PlanoEnsinoList