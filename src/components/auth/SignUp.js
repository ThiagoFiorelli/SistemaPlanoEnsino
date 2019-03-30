import React, { Component } from 'react'
import 'react-dropdown/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const options = [
  { value: 'Administrador', label: 'Administrador' },
  { value: 'Coordenador', label: 'Coordenador' },
  { value: 'Professor', label: 'Professor' }
]
const defaultOption = options[0]


export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    cpf: '',
    cargo: ''
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
    console.log(e);
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Cadastrar</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} required/>
          </div>

          <div className="input-field">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" onChange={this.handleChange} required/>
          </div>

          <div className="input-field">
            <label htmlFor="firstName">Nome</label>
            <input type="text" id="firstName" onChange={this.handleChange} required/>
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Sobrenome</label>
            <input type="text" id="lastName" onChange={this.handleChange} required/>
          </div>

          <div className="input-field">
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" onChange={this.handleChange} required/>
          </div>

          <div className="input-field">
            <label htmlFor="cargo">Cargo</label><br/><br/>
            <RadioGroup id="cargo" onChange={ this.handleChangeOptions } horizontal>
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

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Cadastrar</button> 
          </div> 
        </form>
      </div>
    )
  }
}
