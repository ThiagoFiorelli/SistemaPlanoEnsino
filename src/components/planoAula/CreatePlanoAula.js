import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { createPlanoAula } from '../../store/actions/planoAulaActions'
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import ReactToExcel from 'react-html-table-to-excel'

let options = []
var entrou = false

class AulaTable extends React.Component {
  render(){
    const { planosaula } = this.props;
    return(
      <div className="container section">
          <div className="card z-depth-0">
              <div className="card-content">
              <table id="planoAulaTable">
            <thead>
              <tr>
                <th>Turma</th>
                <th>Professor</th>
                <th>Semana</th>
                <th>T. ou P.</th>
                <th>Bibliografia</th>
                <th>Matérias</th>
                <th>E-Mail</th>
                <th>Data</th>
                <th>Conteúdo</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              
              { planosaula && planosaula.map(planoaula => {
                return (
                  <tr>
                    <td key={planoaula.id}>{planoaula.turma}</td>
                    <td key={planoaula.id}>{planoaula.professor}</td>
                    <td key={planoaula.id}>{planoaula.semana}</td>
                    <td key={planoaula.id}>{planoaula.toup}</td>
                    <td key={planoaula.id}>{planoaula.bibliografia}</td>
                    <td key={planoaula.id}>{planoaula.materias}</td>
                    <td key={planoaula.id}>{planoaula.email}</td>
                    <td key={planoaula.id}>{planoaula.data}</td>
                    <td key={planoaula.id}>{planoaula.conteudo}</td>
                    <td key={planoaula.id}>{planoaula.descricao}</td>
                  </tr>
                )
              })} 
              
            </tbody>
          </table>
          <div className="input-field">
                <ReactToExcel
                className="waves-effect waves-light btn"
                table="planoAulaTable"
                filename="planoAula"
                sheet="sheet 1"
                buttonText="Exportar"
                />
              </div>
              </div>
          </div>
        </div>
    )
  }
}

class CreatePlanoAula extends Component {
  
  state = {
    turma: '',
    materia: '',
    professor: '',
    email: '',
    semana: '',
    data: '',
    conteudo: '',
    bibliografia: '',
    toup: '',
    descricao: ''
  }
  handleChangeOptions = (e) => {
      this.setState({
      materias: e.label
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
    this.props.createPlanoAula(this.state);
    window.location.reload();
  }
  
  render() {
    const { auth, materias, planosaula } = this.props;
    console.log(planosaula)
    if(materias && !entrou){
      materias.forEach(materia =>{
        options = [...options,{value: materia.id, label: materia.nome}]
      });
      entrou = true
    }
    
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Cadastro de Plano de Aula</h5>
          <div className="row">
          <div className="col m12">
          <div className="input-field">
            <input type="text" id='turma' onChange={this.handleChange} />
            <label htmlFor="nome">Turma</label>
          </div>
          <div className="input-field">
            <label htmlFor="cargo">Matérias</label><br /><br />
            <Select options={options} onChange={this.handleChangeOptions}/>
          </div>
          </div>
          <div className="col m12">
          <div className="input-field">
            <input type="text" id='professor' onChange={this.handleChange} />
            <label htmlFor="nome">Professor</label>
          </div>
          <div className="input-field">
            <input type="text" id='email' onChange={this.handleChange} />
            <label htmlFor="nome">E-mail</label>
          </div>
          </div>
          <div className="col m12">
          <div className="input-field">
            <input type="text" id='semana' onChange={this.handleChange} />
            <label htmlFor="nome">Semana</label>
          </div>
          <div className="input-field">
            <input type="text" id='data' onChange={this.handleChange} />
            <label htmlFor="nome">Data</label>
          </div>
          </div>
          <div className="col m12">
          <div className="input-field">
            <input type="text" id='toup' onChange={this.handleChange} />
            <label htmlFor="nome">Teoria ou Prática</label>
          </div>
          <div className="input-field">
            <input type="text" id='conteudo' onChange={this.handleChange} />
            <label htmlFor="nome">Conteúdo</label>
          </div>
          </div>
          <div className="col m12">
          <div className="input-field">
            <input type="text" id='bibliografia' onChange={this.handleChange} />
            <label htmlFor="nome">Bibliografia</label>
          </div>
          <div className="input-field">
            <textarea id="descricao" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="descricao">Descrição</label>
          </div>
          </div>
          </div>
          
          <div className="input-field">
            <button className="waves-effect waves-light btn blue-grey lighten-4">Criar</button>
          </div>
        </form>
        <AulaTable planosaula={planosaula}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    materias: state.firestore.ordered.materias,
    planosaula: state.firestore.ordered.planosaula,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPlanoAula: (planoaula) => dispatch(createPlanoAula(planoaula))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'materias'
  }]),firestoreConnect([
    { collection: 'planosaula', orderBy: ['createdAt', 'desc'] }
  ])
)(CreatePlanoAula)

