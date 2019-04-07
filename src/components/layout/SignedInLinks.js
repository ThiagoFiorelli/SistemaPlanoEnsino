import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { signOut } from '../../store/actions/authActions';

var usu;
var entrou = false;

const SignedInLinks = (props) => {
  const { auth, usuarios } = props;

  if(usuarios && !entrou){
    usuarios.map(usuario => {
      if(usuario.id = auth.uid)
        usu = usuario;
        entrou = true;
    });
    console.log(usu.iniciais)
  }
  
  return (
    <ul className="right">
      <li><NavLink to='/cadastroplanoensino'>Cadastrar Planos de Ensino</NavLink></li>
      <li><NavLink to='/cadastromateria'>Cadastrar Materia</NavLink></li>
      <li><NavLink to='/cadastrocurso'>Cadastrar Curso</NavLink></li>
      <li><NavLink to='/cadastroturma'>Cadastrar Turma</NavLink></li>
      <li><a onClick={props.signOut}>Sair</a></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>TF</NavLink></li>
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
    return {
    auth: state.firebase.auth,
    usuarios: state.firestore.ordered.usuarios
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'usuarios',
  }])
)(SignedInLinks)