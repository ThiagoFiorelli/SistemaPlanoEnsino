import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePlanoEnsino } from '../../store/actions/planoEnsinoActions'
import { Link } from 'react-router-dom';
import moment from 'moment'
import 'moment/locale/pt-br';

class PlanoEnsinoSummary extends Component {
  handleDelete = (e) => {
    this.props.deletePlanoEnsino(this.props.planoensino.id);
  }

  render(){
    const {planoensino} = this.props;
    return (
      <div className="card z-depth-0 planoensino-summary">
        <Link to={'/planoensino/' + planoensino.id} key={planoensino.id}>
          <div className="card-content grey-text text-darken-3">
            <span className="card-title ">{planoensino.nome}</span>
            <p>Criado por {planoensino.authorFirstName}</p>
            <p className="grey-text">{moment(planoensino.createdAt.toDate()).calendar()}</p>
          </div>
        </Link>
        <button onClick={this.handleDelete} className="btn waves-effect waves-light" name="action">
          <i className="tiny material-icons">cancel</i>
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePlanoEnsino: (planoensino) => dispatch(deletePlanoEnsino(planoensino))
  }
}

export default connect(null, mapDispatchToProps)(PlanoEnsinoSummary)