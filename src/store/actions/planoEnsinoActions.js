export const createPlanoEnsino = (planoensino) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('planosensino').add({
        ...planoensino,
        authorFirstName: 'Net',
        authorLastName: 'Ninja',
        authorId: 12345,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PLANO_ENSINO', planoensino });
      }).catch((err) => {
        dispatch({ type: 'CREATE_PLANO_ENSINO_ERROR', err });
      });
    }
  };