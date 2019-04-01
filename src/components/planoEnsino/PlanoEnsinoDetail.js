import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class PlanoEnsinoDetail extends Component {
  
  render(){
    console.log(this.props);
    const {planoensino} = this.props;
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
              <div>Uma data aqui</div>
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
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'planosensino'
  }])
)(PlanoEnsinoDetail)
