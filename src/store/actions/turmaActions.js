export const createTurma = (turma) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('turmas').add({
      ...turma,
      authorFirstName: profile.nome,
      authorLastName: profile.sobrenome,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_TURMA', turma });
    }).catch((err) => {
      dispatch({ type: 'CREATE_TURMA_ERROR', err });
    });
  }
};

export const deleteTurma = (turma) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    // make async call to database
    const firestore = getFirestore();
    firestore.collection('turmas').doc(turma).delete().then(() => {
      dispatch({ type: 'DELETE_TURMA', turma });
    }).catch((err) => {
      dispatch({ type: 'DELETE_TURMA_ERROR', err });
    });

  }
};