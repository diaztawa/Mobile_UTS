import { LogBox } from 'react-native';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const Config = {
  apiKey: 'AIzaSyDiNxtbhv8JX9NL4B7O_XCgybfuws-B7Ns',
  authDomain: 'kombatchlogin.firebaseapp.com',
  databaseURL: 'https://kombatchlogin.firebaseio.com',
  projectId: 'kombatchlogin',
  storageBucket: 'kombatchlogin.appspot.com',
  messagingSenderId: '222920194377',
  appId: '1:222920194377:web:ebf9e25cbad41157600298',
  measurementId: 'G-KQE983X9J8',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(Config);
}

LogBox.ignoreWarnings(['Setting a timer for a long period of time']);

export default firebase;