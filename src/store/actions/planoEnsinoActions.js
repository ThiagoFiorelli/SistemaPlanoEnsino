export const createPlanoEnsino = (planoensino) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('planosensino').add({
      ...planoensino,
      authorFirstName: profile.nome,
      authorLastName: profile.sobrenome,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PLANO_ENSINO', planoensino });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PLANO_ENSINO_ERROR', err });
    });
  }
};

export const deletePlanoEnsino = (planoensino) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    // make async call to database
    const firestore = getFirestore();
    firestore.collection('planosensino').doc(planoensino).delete().then(() => {
      dispatch({ type: 'DELETE_PLANO_ENSINO', planoensino });
    }).catch((err) => {
      dispatch({ type: 'DELETE_PLANO_ENSINO_ERROR', err });
    });



  }
};