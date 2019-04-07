import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMateria } from '../../store/actions/materiaActions'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Select from 'react-select'

let options = []
var entrou = false
class CreateMateria extends Component {
  state = {
    nome: '',
    semestre: '',
    peso: '',
    cursos: ''
  }
  handleChangeOptions = (e) => {
    this.setState({
      coordenador: e.label
    });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createMateria(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth, cursos } = this.props;

    if(cursos && !entrou){
      cursos.map(curso =>{
        options = [...options,{value: curso.id, label: curso.nome}]
      });
      entrou = true
    }
    
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Cadastro de Matéria</h5>
          <div className="input-field">
            <input type="text" id='nome' onChange={this.handleChange} required />
            <label htmlFor="nome">Nome</label>
          </div>
          <div className="input-field">
            <input type="text" id="semestre" onChange={this.handleChange} required></input>
            <label htmlFor="peso">Semestre</label>
          </div>
          <div className="input-field">
            <input type="number" id="peso" className="materialize-number" min="0" max="10" onChange={this.handleChange} required></input>
            <label htmlFor="peso">Peso</label>
          </div>
          <div className="input-field">
            <label htmlFor="cargo">Cursos</label><br/><br/>
              <Select options={options} onChange={this.handleChangeOptions}/>
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
  return {
    cursos: state.firestore.ordered.cursos,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createMateria: (materia) => dispatch(createMateria(materia))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'cursos',
  }])
)(CreateMateria)
