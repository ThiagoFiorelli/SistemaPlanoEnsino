import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { createPlanoAula } from '../../store/actions/planoAulaActions'
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import ReactToExcel from 'react-html-table-to-excel'
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import { Alert } from 'reactstrap';


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
                  <tr key={planoaula.id}>
                    <td >{planoaula.turma}</td>
                    <td>{planoaula.professor}</td>
                    <td>{planoaula.semana}</td>
                    <td>{planoaula.toup}</td>
                    <td>{planoaula.bibliografia}</td>
                    <td>{planoaula.materia}</td>
                    <td>{planoaula.email}</td>
                    <td>{planoaula.data}</td>
                    <td>{planoaula.conteudo}</td>
                    <td>{planoaula.descricao}</td>
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

const withErrorHandling = WrappedComponent => ({ showError, children }) => {
  return (
    <WrappedComponent>
      {showError && <Alert color="danger">Selecione uma turma para prosseguir.</Alert>}
      {children}
    </WrappedComponent>
  );
};

class CreatePlanoAula extends Component {
  constructor(props){
    super(props);
    
    this.state = { blocking: false,
                   showError: false,
                   turma: '',
                   materia: '',
                   professor: '',
                   email: '',
                   semana: '',
                   data: '',
                   conteudo: '',
                   bibliografia: '',
                   toup: '',
                   descricao: ''}
  }

  handleChangeOptions = (e) => {
    const turmas = this.props.turmas;
    turmas.map(turma => {
      if(turma.id == e.value){
        console.log(turma.materia)
        this.setState({
          turma: e.label,
          materia: turma.materia,
          professor: turma.professor
        }, function(){
          
        });
      }
    });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  confirmarTurma = () => {
    if(this.state.turma){
      this.setState(prevState => ({
        blocking: !prevState.blocking,
        showError: false
      }))
    }
    else{
      this.setState(prevState => ({
        showError: true
      }))
    }  
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPlanoAula(this.state);
   // window.location.reload();
  }
  
  render() {
    
    const DivWithErrorHandling = withErrorHandling(({children}) => <div>{children}</div>)
    const { auth, turmas, planosaula } = this.props;
    if(turmas && !entrou){
      turmas.forEach(turma =>{
        options = [...options,{value: turma.id, label: turma.codigoTurma}]
      });
      entrou = true
    }
    
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form className="white col s6" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Cadastro de Plano de Aula</h5>
            
            <BlockUi tag="div" blocking={this.state.blocking}>
            <DivWithErrorHandling showError={this.state.showError}></DivWithErrorHandling>
            <div className="row">
              <div className="col s6">
                <div className="input-field">
                  <label htmlFor="cargo">Turma</label><br /><br />
                  <Select options={options} onChange={this.handleChangeOptions}/>
                </div>
                <div className="input-field">
                  <label htmlFor="cargo">Professor</label><br />
                  <input type="text" id='professor' value={this.state.professor} disabled/>
                </div>
                  <div className="input-field">
                  <label htmlFor="cargo">Matéria</label><br />
                  <input type="text" id='materia' value={this.state.materia} disabled/>
                </div>
              </div>
            </div>
            <div className="input-field">
              <a href="#"className="waves-effect waves-light btn blue-grey lighten-4" onClick={this.confirmarTurma}>Confirmar</a>
            </div>
            </BlockUi>

            <BlockUi tag="div" blocking={!this.state.blocking} message="Selecione a turma para prosseguir">
            <div className="row">
              <div className="col s12">
                <div className="input-field">
                  <input type="text" id='semana' onChange={this.handleChange}/>
                  <label htmlFor="nome">Semana</label>
                </div>
                <div className="input-field">
                  <input type="date" id='data'  onChange={this.handleChange} />
                  <label htmlFor="nome">Data</label>
                </div>
              </div>
              <div className="col s12">
                <div className="input-field">
                  <input type="text" id='toup' onChange={this.handleChange} />
                  <label htmlFor="nome">Teoria ou Prática</label>
                </div>
                <div className="input-field">
                  <input type="text" id='conteudo' onChange={this.handleChange} />
                  <label htmlFor="nome">Conteúdo</label>
                </div>
              </div>
              <div className="col s12">
                <div className="input-field">
                  <input type="text" id='bibliografia' onChange={this.handleChange} />
                  <label htmlFor="nome">Bibliografia</label>
                </div>
                <div className="input-field">
                  <textarea id="descricao" className="materialize-textarea" onChange={this.handleChange}></textarea>
                  <label htmlFor="descricao">Descrição</label>
                </div>
              </div>
              <div className="col s12">
                <div className="input-field">
                  <input type="email" id='email' onChange={this.handleChange} />
                  <label htmlFor="nome">E-mail</label>
                </div>
              </div>
            </div>
            <div className="input-field">
              <button className="waves-effect waves-light btn blue-grey lighten-4">Adicionar</button>
            </div>
            </BlockUi>
 
        </form>
        <AulaTable planosaula={planosaula}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.firestore.ordered)
  return {
    turmas: state.firestore.ordered.turmas,
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
    collection: 'turmas'
  }]),firestoreConnect([
    { collection: 'planosaula', orderBy: ['createdAt', 'desc'] }
  ])
)(CreatePlanoAula)

