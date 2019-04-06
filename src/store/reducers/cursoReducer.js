const initState = {
  cursos: [
    { id: '1', nome: 'Curso1', descricao: 'blah blah blah' },
    { id: '2', nome: 'Curso2', descricao: 'blah blah blah2' },
    { id: '3', nome: 'Curso3', descricao: 'blah blah blah3' }
  ]
}

const cursoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_CURSO':
      console.log('create curso', action.curso);
      return state;
    case 'CREATE_CURSO_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default cursoReducer;