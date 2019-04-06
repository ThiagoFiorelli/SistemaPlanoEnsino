import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

const CursoDetail = (props) => {
  const { curso, auth } = props;

  if (!auth.uid) return <Redirect to='/signin' />

  if (curso) {
    return (
      <div className="container section curso-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{curso.nome}</span>
            <p>{curso.descricao}</p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div>Postado por {curso.authorFirstName} {curso.authorLastName}</div>
            <div>Uma data aqui</div>
          </div>

        </div>
      </div>
    )
  } else {

    return (
      <div className="container center" >
        <p>Carregando curso...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const cursos = state.firestore.data.cursos;
  const curso = cursos ? cursos[id] : null;
  return {
    curso: curso,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'cursos'
  }])
)(CursoDetail)
