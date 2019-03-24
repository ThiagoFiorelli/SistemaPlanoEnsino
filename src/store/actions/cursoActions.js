export const createCurso = (curso) => {
    return (dispatch, getState) => {
      // make async call to database
      dispatch({ type: 'CREATE_CURSO', curso });
    }
  };