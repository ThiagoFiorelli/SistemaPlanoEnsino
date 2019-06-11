import authReducer from './authReducer'
import projectReducer from './projectReducer'
import planoEnsinoReducer from './planoEnsinoReducer'
import planoAulaReducer from './planoAulaReducer'
import cursoReducer from './cursoReducer'
import turmaReducer from './turmaReducer'
import materiaReducer from './materiaReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  planoensino: planoEnsinoReducer,
  planoaula: planoAulaReducer,
  project: projectReducer,
  curso: cursoReducer,
  turma: turmaReducer,
  materia: materiaReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer