import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetails';
import CursoDetail from './components/cursos/CursoDetail';
import CreateCurso from './components/cursos/CreateCurso';
import PlanoEnsinoDetail from './components/planoEnsino/PlanoEnsinoDetail';
import CreatePlanoEnsino from './components/planoEnsino/CreatePlanoEnsino';
import PlanoAulaDetail from './components/planoAula/PlanoAulaDetail';
import CreatePlanoAula from './components/planoAula/CreatePlanoAula';
import MateriaDetail from './components/materias/MateriaDetail';
import CreateMateria from './components/materias/CreateMateria';
import TurmaDetail from './components/turmas/TurmaDetail';
import CreateTurma from './components/turmas/CreateTurma';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/planoensino/:id' component={PlanoEnsinoDetail} />
            <Route path='/planoaula/:id' component={PlanoAulaDetail} />
            <Route path='/materia/:id' component={MateriaDetail} />
            <Route path='/curso/:id' component={CursoDetail} />
            <Route path='/project/:id' component={ProjectDetail} />
            <Route path='/turma/:id' component={TurmaDetail} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/cadastroplanoensino' component={CreatePlanoEnsino} /> 
            <Route path='/cadastroplanoaula' component={CreatePlanoAula} /> 
            <Route path='/cadastromateria' component={CreateMateria} /> 
            <Route path='/cadastrocurso' component={CreateCurso} />
            <Route path='/cadastroturma' component={CreateTurma} />    
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;