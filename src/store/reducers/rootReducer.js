import authReducer from './authReducer'
import projectReducer from './projectReducer'
import cursoReducer from './cursoReducer'
import materiaReducer from './materiaReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  curso: cursoReducer,
  materia: materiaReducer,
  firestore: firestoreReducer
});

export default rootReducer