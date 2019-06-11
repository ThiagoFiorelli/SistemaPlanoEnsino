import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import ReactToExcel from 'react-html-table-to-excel'

class PlanoAulaDetail extends Component {

  render() {
    const { auth, planoaula } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    if (planoaula) {
      return (
        <div className="container section planoaula-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{planoaula.nome}</span>
              <p>{planoaula.descricao}</p>
            </div>

            <div className="card-action grey lighten-4 grey-text">
              <div>Postado por {planoaula.authorFirstName} {planoaula.authorLastName}</div>
              <div>{moment(planoaula.createdAt.toDate()).calendar()}</div>
            </div>
            <div>
              <div className="card-action">
              <table id="table-to-xls" className="centered">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Matéria</th>
                    <th>Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{planoaula.nome}</td>
                    <td>{planoaula.materias}</td>
                    <td>{planoaula.descricao}</td>
                  </tr>
                </tbody>
              </table>
              <div className="input-field">
                <ReactToExcel
                className="waves-effect waves-light btn"
                table="table-to-xls"
                filename="planoAula"
                sheet="sheet 1"
                buttonText="Exportar"
                />
              </div>
              
              </div>
          </div>

          </div>
        </div>
      )
    } else {

      return (
        <div className="container center" >
          <p>Carregando plano de aula...</p>
        </div>
      )
    }
  }


}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const planosaula = state.firestore.data.planosaula;
  const planoaula = planosaula ? planosaula[id] : null;
  return {
    planoaula: planoaula,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'planosaula'
  }])
)(PlanoAulaDetail)
