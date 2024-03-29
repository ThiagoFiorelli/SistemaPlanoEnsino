import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import ReactToExcel from 'react-html-table-to-excel'

class PlanoEnsinoDetail extends Component {

  render() {
    const { auth, planoensino } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    if (planoensino) {
      return (
        <div className="container section planoensino-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{planoensino.nome}</span>
              <p>{planoensino.descricao}</p>
            </div>

            <div className="card-action grey lighten-4 grey-text">
              <div>Postado por {planoensino.authorFirstName} {planoensino.authorLastName}</div>
              <div>{moment(planoensino.createdAt.toDate()).calendar()}</div>
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
                    <td>{planoensino.nome}</td>
                    <td>{planoensino.materias}</td>
                    <td>{planoensino.descricao}</td>
                  </tr>
                </tbody>
              </table>
              <div className="input-field">
                <ReactToExcel
                className="waves-effect waves-light btn"
                table="table-to-xls"
                filename="planoEnsino"
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
          <p>Carregando plano de ensino...</p>
        </div>
      )
    }
  }


}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const planosensino = state.firestore.data.planosensino;
  const planoensino = planosensino ? planosensino[id] : null;
  return {
    planoensino: planoensino,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'planosensino'
  }])
)(PlanoEnsinoDetail)
