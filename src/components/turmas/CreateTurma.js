import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTurma } from '../../store/actions/turmaActions'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Redirect } from 'react-router-dom'

const options = [
  { value: 'Administrador', label: 'Administrador' },
  { value: 'Coordenador', label: 'Coordenador' },
  { value: 'Professor', label: 'Professor' }
]
class CreateTurma extends Component {
  state = {
    codigoTurma: '',
    professor: ''
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
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Cadastro de Turma</h5>
          <div className="input-field">
            <input type="text" id='codigoTurma' onChange={this.handleChange} />
            <label htmlFor="codigoTurma">Código da Turma</label>
          </div>
          <div className="input-field">
            <label htmlFor="cargo">Professor</label><br/><br/>
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createTurma: (turma) => dispatch(createTurma(turma))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTurma)
