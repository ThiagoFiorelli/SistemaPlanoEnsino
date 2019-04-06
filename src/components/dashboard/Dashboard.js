import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import CursoList from '../cursos/CursoList';
import PlanoEnsinoList from '../planoEnsino/PlanoEnsinoList';
import MateriaList from '../materias/MateriaList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    const { projects, cursos, materias, planosensino } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m4">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m4">
            <CursoList cursos={cursos} />
          </div>
          <div className="col s12 m4">
            <MateriaList materias={materias} />
          </div>
          <div className="col s12 m4">
            <PlanoEnsinoList planosensino={planosensino} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
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
    materias: state.firestore.ordered.materias,
    planosensino: state.firestore.ordered.planosensino
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ]),
  firestoreConnect([
    {collection: 'cursos'}
  ]),
  firestoreConnect([
    {collection: 'materias'}
  ]),
  firestoreConnect([
    {collection: 'planosensino'}
  ])
)(Dashboard)