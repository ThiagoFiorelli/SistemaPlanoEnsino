import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDcfj7kr2_iH2BhMPtb5v8XU0Pha0Z2cmc",
    authDomain: "sistemaplanoensino.firebaseapp.com",
    databaseURL: "https://sistemaplanoensino.firebaseio.com",
    projectId: "sistemaplanoensino",
    storageBucket: "sistemaplanoensino.appspot.com",
    messagingSenderId: "133803901326"
};
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;