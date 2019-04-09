import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCurso } from '../../store/actions/cursoActions'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Select from 'react-select'
import { Redirect } from 'react-router-dom'

let options = []
var entrou = false
class CreateCurso extends Component {
  state = {
    nome: '',
    descricao: '',
    coordenador: ''
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
    this.props.createCurso(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth, coordenadores } = this.props;

    if (coordenadores && !entrou) {
      coordenadores.forEach(coordenador => {
        if (coordenador.cargo == "Coordenador") {
          options = [...options, { value: coordenador.id, label: coordenador.nome }]
        }
      });
      entrou = true
    }

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Cadastro de Curso</h5>
          <div className="input-field">
            <input type="text" id='nome' onChange={this.handleChange} />
            <label htmlFor="nome">Nome</label>
          </div>
          <div className="input-field">
            <textarea id="descricao" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="descricao">Descrição</label>
          </div>
          <div className="input-field">
            <label htmlFor="cargo">Coordenador</label><br /><br />
            <Select options={options} onChange={this.handleChangeOptions} />
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
    coordenadores: state.firestore.ordered.usuarios,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createCurso: (curso) => dispatch(createCurso(curso))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'usuarios',
  }])
)(CreateCurso)
