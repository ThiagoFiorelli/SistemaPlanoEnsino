import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import CursoList from '../cursos/CursoList';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { projects } = this.props;
    const { cursos } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m6">
            <CursoList cursos={cursos} />
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
    projects: state.project.projects,
    cursos: state.curso.cursos
  }
}

export default connect(mapStateToProps)(Dashboard)