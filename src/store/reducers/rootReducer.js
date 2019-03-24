import authReducer from './authReducer'
import projectReducer from './projectReducer'
import cursoReducer from './cursoReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  curso: cursoReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer