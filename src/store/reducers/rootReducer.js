import authReducer from './authReducer'
import projectReducer from './projectReducer'
import planoEnsinoReducer from './planoEnsinoReducer'
import cursoReducer from './cursoReducer'
import materiaReducer from './materiaReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  planoensino: planoEnsinoReducer,
  project: projectReducer,
  curso: cursoReducer,
  materia: materiaReducer,
  firestore: firestoreReducer
});

export default rootReducer