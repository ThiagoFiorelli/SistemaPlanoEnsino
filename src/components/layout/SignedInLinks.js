import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>Novo Plano de Ensino</NavLink></li>
            <li><NavLink to='/'>Sair</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>Conta</NavLink></li>
        </ul>
    )
}

export default SignedInLinks