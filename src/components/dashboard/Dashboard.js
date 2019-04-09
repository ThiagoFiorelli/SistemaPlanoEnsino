import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import CursoList from '../cursos/CursoList';
import TurmaList from '../turmas/TurmaList';
import PlanoEnsinoList from '../planoEnsino/PlanoEnsinoList';
import MateriaList from '../materias/MateriaList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { projects, cursos, materias, planosensino, turmas, auth, notifications } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m4">
            <h2 className="center"><i className="material-icons">group</i> Turmas</h2>
            <TurmaList turmas={turmas} />
          </div>
          <div className="col s12 m4">
            <h2 className="center"><i className="material-icons">library_books</i> Matérias</h2>
            <MateriaList materias={materias} />
          </div>
          <div className="col s12 m4">
            <h2 className="center"><i className="material-icons">local_library</i> Cursos</h2>
            <CursoList cursos={cursos} />
          </div>
          <div className="col s12 m4">
            <h2 className="center"><i className="material-icons">book</i> P. E.</h2>
            <PlanoEnsinoList planosensino={planosensino} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    cursos: state.firestore.ordered.cursos,
    turmas: state.firestore.ordered.turmas,
    materias: state.firestore.ordered.materias,
    planosensino: state.firestore.ordered.planosensino,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] }
  ]),
  firestoreConnect([
    { collection: 'cursos', orderBy: ['createdAt', 'desc'] }
  ]),
  firestoreConnect([
    { collection: 'materias', orderBy: ['createdAt', 'desc'] }
  ]),
  firestoreConnect([
    { collection: 'planosensino', orderBy: ['createdAt', 'desc'] }
  ]),
  firestoreConnect([
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc'] }
  ]),
  firestoreConnect([
    { collection: 'turmas', orderBy: ['createdAt', 'desc'] }
  ])
)(Dashboard)