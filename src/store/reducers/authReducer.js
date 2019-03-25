const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Erro ao entrar'
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        authError: null
      }
    default:
      return state;
  }
};

export default authReducer;