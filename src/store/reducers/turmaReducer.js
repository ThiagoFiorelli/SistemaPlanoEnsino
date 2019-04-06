const initState = {
  cursos: [
    { id: '1', nome: 'Curso1', descricao: 'blah blah blah' },
    { id: '2', nome: 'Curso2', descricao: 'blah blah blah2' },
    { id: '3', nome: 'Curso3', descricao: 'blah blah blah3' }
  ]
}

const turmaReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TURMA':
      console.log('create turma', action.turma);
      return state;
    case 'CREATE_TURMA_ERROR':
      console.log('create project error', action.err);
      return state;
    case 'DELETE_TURMA':
      console.log('delete turma', action.turma);
      return state;
    case 'DELETE_TURMA_ERROR':
      console.log('delete turma error', action.err);
      return state;
    default:
      return state;
  }
};

export default turmaReducer;