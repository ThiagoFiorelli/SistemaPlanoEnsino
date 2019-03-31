import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetails';
import CursoDetail from './components/cursos/CursoDetail';
import CreateCurso from './components/cursos/CreateCurso';
import PlanoEnsinoDetail from './components/planoEnsino/PlanoEnsinoDetail';
import CreatePlanoEnsino from './components/planoEnsino/CreatePlanoEnsino';
import MateriaDetail from './components/materias/MateriaDetail';
import CreateMateria from './components/materias/CreateMateria';
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
            <Route path='/materia/:id' component={MateriaDetail} />
            <Route path='/curso/:id' component={CursoDetail} />
            <Route path='/project/:id' component={ProjectDetail} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/cadastroplanoensino' component={CreatePlanoEnsino} /> 
            <Route path='/cadastromateria' component={CreateMateria} /> 
            <Route path='/cadastrocurso' component={CreateCurso} />  
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;