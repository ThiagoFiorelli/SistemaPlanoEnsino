const initState = {
    cursos: [
      {id: '1', nome: 'help me find peach', descricao: 'blah blah blah'},
      {id: '2', nome: 'help me find peach2', descricao: 'blah blah blah2'},
      {id: '3', nome: 'help me find peach3', descricao: 'blah blah blah3'}
    ]
  }
  
const cursoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_CURSO':
      console.log('create curso', action.project);
  }
  return state;
};

export default cursoReducer;