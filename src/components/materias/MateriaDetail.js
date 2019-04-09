import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const MateriaDetails = (props) => {
  const { auth, materia } = props;

  if (!auth.uid) return <Redirect to='/signin' />

  if (materia) {
    return (
      <div className="container section materia-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{materia.nome}</span>
          </div>
          <div className="card-content">
            <label>Peso:</label>
            <p>{materia.peso}</p>
          </div>
          <div className="card-content">
            <label>Semestre:</label>
            <p>{materia.semestre}</p>
          </div>
          <div className="card-content">
            <label>Cursos:</label>
            <p>{materia.cursos}</p>
          </div>

          <div className="card-action grey lighten-4 grey-text">
            <div>Postado por {materia.authorFirstName} {materia.authorLastName}</div>
            <div>{moment(materia.createdAt.toDate()).calendar()}</div>
          </div>

        </div>
      </div>
    )
  } else {

    return (
      <div className="container center" >
        <p>Carregando materia...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const materias = state.firestore.data.materias;
  const materia = materias ? materias[id] : null;
  return {
    materia: materia,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'materias'
  }])
)(MateriaDetails)