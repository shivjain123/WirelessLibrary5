import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDZ97bhwR9nMlNCTvtbvftxyWujtnwvzr4",
    authDomain: "wily-app-80e53.firebaseapp.com",
    projectId: "wily-app-80e53",
    storageBucket: "wily-app-80e53.appspot.com",
    messagingSenderId: "831237577253",
    appId: "1:831237577253:web:17c2a728cbf3daea7e7dcc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();