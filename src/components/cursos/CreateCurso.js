import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCurso } from '../../store/actions/cursoActions'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
  { value: 'Administrador', label: 'Administrador' },
  { value: 'Coordenador', label: 'Coordenador' },
  { value: 'Professor', label: 'Professor' }
]
class CreateCurso extends Component {
  state = {
    nome: '',
    descricao: ''
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
            <label htmlFor="cargo">Matérias</label><br/><br/>
              <Dropdown options={options} onChange={this.handleChangeOptions} value={options[0]} placeholder="Select an option" />
          </div>
          <div className="input-field">
            <label htmlFor="cargo">Coordenador</label><br/><br/>
              <Dropdown options={options} onChange={this.handleChangeOptions} value={options[0]} placeholder="Select an option" />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Criar</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCurso: (curso) => dispatch(createCurso(curso))
  }
}

export default connect(null, mapDispatchToProps)(CreateCurso)
