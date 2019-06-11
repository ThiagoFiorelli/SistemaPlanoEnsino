export const createPlanoAula = (planoaula) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('planosaula').add({
      ...planoaula,
      authorFirstName: profile.nome,
      authorLastName: profile.sobrenome,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PLANO_AULA', planoaula });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PLANO_AULA_ERROR', err });
    });
  }
};

export const deletePlanoAula = (planoaula) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    // make async call to database
    const firestore = getFirestore();
    firestore.collection('planosaula').doc(planoaula).delete().then(() => {
      dispatch({ type: 'DELETE_PLANO_AULA', planoaula });
    }).catch((err) => {
      dispatch({ type: 'DELETE_PLANO_AULA_ERROR', err });
    });



  }
};