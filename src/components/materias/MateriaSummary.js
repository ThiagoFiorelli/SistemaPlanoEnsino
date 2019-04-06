import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteMateria} from '../../store/actions/materiaActions'
import { Link } from 'react-router-dom';
import moment from 'moment'
import 'moment/locale/pt-br';
import { Redirect } from 'react-router-dom';

class MateriaSummary extends Component {
  handleDelete = (e) => {
      this.props.deleteMateria(this.props.materia.id);
  }

  render() {
    const { auth, materia } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="card z-depth-0 materia-summary">
        <Link to={'/materia/' + materia.id} key={materia.id}>
          <div className="card-content grey-text text-darken-3">
            <span className="card-title ">{materia.nome}</span>
            <p>Criado por {materia.authorFirstName}</p>
            <p className="grey-text">{moment(materia.createdAt.toDate()).calendar()}</p>
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
    deleteMateria: (materia) => dispatch(deleteMateria(materia))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MateriaSummary)