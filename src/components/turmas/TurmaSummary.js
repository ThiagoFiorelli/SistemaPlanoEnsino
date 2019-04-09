import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTurma} from '../../store/actions/turmaActions'
import { Link } from 'react-router-dom';
import moment from 'moment'
import 'moment/locale/pt-br';
import { Redirect } from 'react-router-dom';

class TurmaSummary extends Component {
  handleDelete = (e) => {
      this.props.deleteTurma(this.props.turma.id);
  }

  render() {
    const { auth, turma } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="card z-depth-0 turma-summary">
        <Link to={'/turma/' + turma.id} key={turma.id}>
          <div className="card-content grey-text text-darken-3">
            <span className="card-title ">{turma.codigoTurma}</span>
            <p>Criado por {turma.authorFirstName}</p>
            <p className="grey-text">{moment(turma.createdAt.toDate()).calendar()}</p>
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
    deleteTurma: (turma) => dispatch(deleteTurma(turma))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TurmaSummary)