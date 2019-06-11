import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/cadastroplanoensino'>Cadastrar Planos de Ensino</NavLink></li>
      <li><NavLink to='/cadastroplanoaula'>Cadastrar Planos de Aula</NavLink></li>
      <li><NavLink to='/cadastroturma'>Cadastrar Turma</NavLink></li>
      <li><NavLink to='/cadastromateria'>Cadastrar Materia</NavLink></li>
      <li><NavLink to='/cadastrocurso'>Cadastrar Curso</NavLink></li>
      <li><a onClick={props.signOut}><i className="material-icons">power_settings_new</i></a></li>
      <li><NavLink to='/' className='btn btn-floating green darken-3'>{props.profile.iniciais}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)