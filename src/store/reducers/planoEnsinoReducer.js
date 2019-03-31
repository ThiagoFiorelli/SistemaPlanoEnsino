const initState = {
    planoensino: [
      { id: '1', nome: 'PE1', curso: 'curso1', materia: 'materia1', descricao: 'blah blah blah' },
      { id: '2', nome: 'PE2', curso: 'curso2', materia: 'materia2', descricao: 'blah blah blah2' },
      { id: '3', nome: 'PE3', curso: 'curso3', materia: 'materia3', descricao: 'blah blah blah3' }
    ]
  }
  
  const planoEnsinoReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_PLANO_ENSINO':
        console.log('create planoensino', action.planoensino);
        return state;
      case 'CREATE_PLANO_ENSINO_ERROR':
        console.log('create planoensino error', action.err);
        return state;
      case 'DELETE_PLANO_ENSINO':
        console.log('delete planoensino', action.planoensino);
        return state;
      case 'DELETE_PLANO_ENSINO_ERROR':
        console.log('delete planoensino error', action.err);
        return state;
      default:
        return state;
    }
  };
  
  export default planoEnsinoReducer;