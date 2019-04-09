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

export const deleteCurso = (curso) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
     
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('cursos').doc(curso).delete().then(() => {
      dispatch({ type: 'DELETE_CURSO', curso });
    }).catch((err) => {
      dispatch({ type: 'DELETE_CURSO_ERROR', err });
    });
 
  }
};