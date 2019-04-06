export const createCurso = (curso) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('cursos').add({
      ...curso,
      authorFirstName: profile.nome,
      authorLastName: profile.sobrenome,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_CURSO', curso });
    }).catch((err) => {
      dispatch({ type: 'CREATE_CURSO_ERROR', err });
    });
  }
};