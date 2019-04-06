import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

const TurmaDetail = (props) => {
  const { turma, auth } = props;

  if (!auth.uid) return <Redirect to='/signin' />

  if (turma) {
    return (
      <div className="container section turma-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{turma.nome}</span>
            <p>{turma.descricao}</p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div>Postado por {turma.authorFirstName} {turma.authorLastName}</div>
            <div>Uma data aqui</div>
          </div>

        </div>
      </div>
    )
  } else {

    return (
      <div className="container center" >
        <p>Carregando turma...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const turmas = state.firestore.data.turmas;
  const turma = turmas ? turmas[id] : null;
  return {
    turma: turma,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'turmas'
  }])
)(TurmaDetail)
