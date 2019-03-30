import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/cadastromateria'>Cadastrar Materia</NavLink></li>
            <li><NavLink to='/cadastrocurso'>Cadastrar Curso</NavLink></li>
            <li><NavLink to='/'>Sair</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>TF</NavLink></li>
        </ul>
    )
}

export default SignedInLinks