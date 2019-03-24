export const createCurso = (curso) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('cursos').add({
      ...curso
    }).then(() => {
      dispatch({ type: 'CREATE_CURSO', curso });
    }).catch((err) => {
      dispatch({ type: 'CREATE_CURSO_ERROR', err });
    });
  }
};