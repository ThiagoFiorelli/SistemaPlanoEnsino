import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCurso } from '../../store/actions/cursoActions'
import { Redirect } from 'react-router-dom'

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
    const { auth } = this.props;

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
            <button className="btn blue darken-3">Criar</button>
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
    createCurso: (curso) => dispatch(createCurso(curso))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCurso)
