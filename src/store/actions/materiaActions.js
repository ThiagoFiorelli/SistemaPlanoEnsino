export const createMateria = (materia) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('materias').add({
      ...materia,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_MATERIA', materia });
    }).catch((err) => {
      dispatch({ type: 'CREATE_MATERIA_ERROR', err });
    });
  }
};

export const deleteMateria = (materia) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
     
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('materias').doc(materia).delete().then(() => {
      dispatch({ type: 'DELETE_MATERIA', materia });
    }).catch((err) => {
      dispatch({ type: 'DELETE_MATERIA_ERROR', err });
    });
 
  }
};