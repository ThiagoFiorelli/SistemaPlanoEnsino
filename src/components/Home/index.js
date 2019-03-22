import React from 'react';

import {withAuthorization} from '../Session';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>Home acessada por usuários logados</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);