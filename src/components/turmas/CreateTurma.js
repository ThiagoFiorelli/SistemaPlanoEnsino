import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTurma } from '../../store/actions/turmaActions'
import Dropdown from 'react-dropdown'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Select from 'react-select'
import 'react-dropdown/style.css'
import { Redirect } from 'react-router-dom'

const optionsPeriodo = [
  { value: 'Matutino', label: 'Matutino' },
  { value: 'Vespertino', label: 'Vespertino' },
  { value: 'Noturno', label: 'Noturno' }
]
var entrouMateria = false
var entrouProfessor = false
let optionsMateria = []
let optionsProfessor = []
class CreateTurma extends Component {
  state = {
    codigoTurma: '',
    professor: '',
    periodo: '',
    materia: ''
  }
  handleChangeOptionsM = (e) => {
    this.setState({
    materia: e.label
    });
  }
  handleChangeOptionsPro = (e) => {
    this.setState({
    professor: e.label
    });
  }
  handleChangeOptionsPe = (e) => {
    this.setState({
    periodo: e.label
    });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTurma(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth, materias, professores } = this.props;

    if(materias && !entrouMateria){
      materias.forEach(materia =>{
        optionsMateria = [...optionsMateria,{value: materia.id, label: materia.nome}]
      });
      entrouMateria = true
    }

    if(professores && !entrouProfessor){
      professores.forEach(professor =>{
        if(professor.cargo == "Professor"){
          optionsProfessor = [...optionsProfessor,{value: professor.id, label: professor.nome}]
        }
      });
      entrouProfessor = true
    }

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Cadastro de Turma</h5>
          <div className="input-field">
            <input type="text" id='codigoTurma' onChange={this.handleChange}/>
            <label htmlFor="codigoTurma">Código da Turma</label>
          </div>
          <div className="input-field">
            <label htmlFor="cargo">Professor</label><br/><br/>
              <Select options={optionsProfessor} onChange={this.handleChangeOptionsPro}/>
          </div>
          <div className="input-field">
            <label htmlFor="cargo">Período</label><br/><br/>
              <Select options={optionsPeriodo} onChange={this.handleChangeOptionsPe}/>
          </div>
          <div className="input-field">
            <label htmlFor="cargo">Matéria</label><br/><br/>
              <Select options={optionsMateria} onChange={this.handleChangeOptionsM}/> 
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Criar</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    materias: state.firestore.ordered.materias,
    professores: state.firestore.ordered.usuarios
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createTurma: (turma) => dispatch(createTurma(turma))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'materias'
  }]),
  firestoreConnect([{
    collection: 'usuarios'
  }])
)(CreateTurma)
