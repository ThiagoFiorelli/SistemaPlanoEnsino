const initState = {
    materias: [
      { id: '1', nome: 'Materia1', peso: 'blah blah blah' },
      { id: '2', nome: 'Materia2', peso: 'blah blah blah2' },
      { id: '3', nome: 'Materia3', peso: 'blah blah blah3' }
    ]
  }
  
  const materiaReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_MATERIA':
        console.log('create materia', action.materia);
        return state;
      case 'CREATE_MATERIA_ERROR':
        console.log('create materia error', action.err);
        return state;
      case 'DELETE_MATERIA':
        console.log('delete materia', action.materia);
        return state;
      case 'DELETE_MATERIA_ERROR':
        console.log('delete materia error', action.err);
        return state;
      default:
        return state;
    }
  };
  
  export default materiaReducer;