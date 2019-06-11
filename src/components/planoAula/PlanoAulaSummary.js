import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePlanoAula } from '../../store/actions/planoAulaActions'
import { Link } from 'react-router-dom';
import moment from 'moment'
import 'moment/locale/pt-br';
import { Redirect } from 'react-router-dom';

class PlanoAulaSummary extends Component {
  handleDelete = (e) => {
    this.props.deletePlanoAula(this.props.planoaula.id);
  }

  render() {
    const { auth, planoaula } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="card z-depth-0 planoaula-summary">
        <Link to={'/planoaula/' + planoaula.id} key={planoaula.id}>
          <div className="card-content grey-text text-darken-3">
            <span className="card-title ">{planoaula.nome}</span>
            <p>Criado por {planoaula.authorFirstName}</p>
            <p className="grey-text">{moment(planoaula.createdAt.toDate()).calendar()}</p>
          </div>
        </Link>
        <button onClick={this.handleDelete} className="btn waves-effect waves-light" name="action">
          <i className="tiny material-icons">cancel</i>
        </button>
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
    deletePlanoAula: (planoaula) => dispatch(deletePlanoAula(planoaula))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanoAulaSummary)