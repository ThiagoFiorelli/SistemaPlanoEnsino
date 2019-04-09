import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteCurso} from '../../store/actions/cursoActions'
import { Link } from 'react-router-dom';
import moment from 'moment'
import 'moment/locale/pt-br';
import { Redirect } from 'react-router-dom';

class CursoSummary extends Component {
  handleDelete = (e) => {
      this.props.deleteCurso(this.props.curso.id);
  }

  render() {
    const { auth, curso } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="card z-depth-0 curso-summary">
        <Link to={'/curso/' + curso.id} key={curso.id}>
          <div className="card-content grey-text text-darken-3">
            <span className="card-title ">{curso.nome}</span>
            <p>Criado por {curso.authorFirstName}</p>
            <p className="grey-text">{moment(curso.createdAt.toDate()).calendar()}</p>
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
    deleteCurso: (curso) => dispatch(deleteCurso(curso))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CursoSummary)