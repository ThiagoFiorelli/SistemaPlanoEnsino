
  const initState = {
    planoaula: [
      { id: '1', nome: 'PE1', curso: 'curso1', materia: 'materia1', descricao: 'blah blah blah' },
      { id: '2', nome: 'PE2', curso: 'curso2', materia: 'materia2', descricao: 'blah blah blah2' },
      { id: '3', nome: 'PE3', curso: 'curso3', materia: 'materia3', descricao: 'blah blah blah3' }
    ]
  }

  const planoAulaReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_PLANO_AULA':
        console.log('create planoaula', action.planoaula);
        return state;
      case 'CREATE_PLANO_AUÇA_ERROR':
        console.log('create planoaula error', action.err);
        return state;
      case 'DELETE_PLANO_AULA':
        console.log('delete planoaula', action.planoaula);
        return state;
      case 'DELETE_PLANO_AULA_ERROR':
        console.log('delete planoaula error', action.err);
        return state;
      default:
        return state;
    }
  };
  
  export default planoAulaReducer;