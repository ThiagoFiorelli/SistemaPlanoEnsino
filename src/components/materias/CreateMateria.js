import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMateria } from '../../store/actions/materiaActions'
import { Redirect } from 'react-router-dom'

class CreateMateria extends Component {
  state = {
    nome: '',
    peso: ''
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
    const { auth } = this.props;
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
            <input type="number" id="peso" className="materialize-number" min="0" max="10" onChange={this.handleChange} required></input>
            <label htmlFor="peso">Peso</label>
          </div>
          <div className="input-field">
            <button className="waves-effect waves-light btn blue-grey lighten-4">Criar</button>
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
    createMateria: (materia) => dispatch(createMateria(materia))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMateria)
