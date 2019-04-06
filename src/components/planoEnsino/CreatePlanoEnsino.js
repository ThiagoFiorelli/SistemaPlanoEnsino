import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { createPlanoEnsino } from '../../store/actions/planoEnsinoActions'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Redirect } from 'react-router-dom';

let options = [{ value: 'teste1', label: 'teste1' }, { value: 'teste2', label: 'teste2' }]

class CreatePlanoEnsino extends Component {
  state = {
    nome: '',
    descricao: '',
    materias: ''
  }
  handleChangeOptions = (e) => {
    this.setState({
      materias: e.value.props.value
    });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    this.props.createPlanoEnsino(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth, materias } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Cadastro de Plano de Ensino</h5>
          <div className="input-field">
            <input type="text" id='nome' onChange={this.handleChange} />
            <label htmlFor="nome">Nome</label>
          </div>
          <div className="input-field">
            <label htmlFor="cargo">Matérias</label><br /><br />
            <Dropdown options={options} onChange={this.handleChangeOptions} value={options[0]} placeholder="Select an option" />
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

const mapStateToProps = (state, ownProps) => {
  return {
    materias: state.firestore.ordered.materias,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPlanoEnsino: (planoensino) => dispatch(createPlanoEnsino(planoensino))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'materias'
  }])
)(CreatePlanoEnsino)

/*connect(null, mapDispatchToProps)(CreatePlanoEnsino)*/
