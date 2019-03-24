import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import cursoReducer from './cursoReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  curso: cursoReducer
});

export default rootReducer

// the key name will be the data property on the state object