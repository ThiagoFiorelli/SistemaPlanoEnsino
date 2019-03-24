import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

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
   
}

  handleChange = (e) => {
      console.log(e);
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
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="firstName">Nome</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Sobrenome</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="cargo">Cargo</label>
            <Dropdown name="cargo" options={options} onChange={() => this.handleChangeOptions} value={defaultOption} placeholder="Selecione um cargo" />
            <Select id="cargo" options={ options } oonChange={() =>this.handleChangeOptions}/>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Cadastrar</button>
          </div>
        </form>
      </div>
    )
  }
}
