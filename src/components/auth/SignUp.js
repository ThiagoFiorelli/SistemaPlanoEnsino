import React, { Component } from 'react';
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

const options = [
  { value: 'Administrador', label: 'Administrador' },
  { value: 'Coordenador', label: 'Coordenador' },
  { value: 'Professor', label: 'Professor' }
]
const defaultOption = options[0]


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    cpf: '',
    cargo: '',
    cursos: ''
  }

  handleChangeOptions = (e) => {
    console.log(e);
    this.setState({
      cargo: e
    });
  }

  handleChange = (e) => {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {

    e.preventDefault();
    this.props.signUp(this.state)
    this.props.history.push('/');
  }

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Cadastrar</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} required />
          </div>

          <div className="input-field">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" onChange={this.handleChange} required />
          </div>

          <div className="input-field">
            <label htmlFor="firstName">Nome</label>
            <input type="text" id="firstName" onChange={this.handleChange} required />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Sobrenome</label>
            <input type="text" id="lastName" onChange={this.handleChange} required />
          </div>

          <div className="input-field">
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" onChange={this.handleChange} required />
          </div>

          <div className="input-field">
            <label htmlFor="cargo">Cargo</label><br /><br />
            <RadioGroup id="cargo" onChange={this.handleChangeOptions} horizontal>
              <RadioButton value="Administrador">
                Administrador
              </RadioButton>
              <RadioButton value="Coordenador">
                Coordenador
              </RadioButton>
              <RadioButton value="Professor">
                Professor
              </RadioButton>
            </RadioGroup>
          </div>

          <div className="input-field col-md-12">
            <p>
              <label className="input-field col-md-4">
                <input type="checkbox" />
                <span>Administrador</span>
              </label>
              <label className="input-field col-md-4">
                <input type="checkbox" />
                <span>Coordenador</span>
              </label>
              <label className="input-field col-md-4">
                <input type="checkbox" />
                <span>Professor</span>
              </label>
            </p>
          </div>

          <div className="input-field">
            <label htmlFor="cargo">Cursos</label><br /><br />
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
          </div>

          <div className="input-field">
            <button className="waves-effect waves-light btn blue-grey lighten-4">Cadastrar</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)