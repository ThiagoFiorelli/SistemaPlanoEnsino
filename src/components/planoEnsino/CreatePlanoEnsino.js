import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPlanoEnsino } from '../../store/actions/planoEnsinoActions'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


const options = [
  { value: 'Administrador', label: 'Administrador' },
  { value: 'Coordenador', label: 'Coordenador' },
  { value: 'Professor', label: 'Professor' }
]
const defaultOption = options[0]

class CreatePlanoEnsino extends Component {
  state = {
    nome: '',
    descricao: '',
    materias: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPlanoEnsino(this.state);
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Cadastro de Plano de Ensino</h5>
          <div className="input-field">
            <input type="text" id='nome' onChange={this.handleChange} />
            <label htmlFor="nome">Nome</label>
          </div>
          <div className="input-field">
            <label htmlFor="cargo">Matérias</label><br/><br/>
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
          </div>
          <div className="input-field">
            <textarea id="descricao" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="descricao">Descrição do semestre</label>
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
    createPlanoEnsino: (planoensino) => dispatch(createPlanoEnsino(planoensino))
  }
}

export default connect(null, mapDispatchToProps)(CreatePlanoEnsino)
