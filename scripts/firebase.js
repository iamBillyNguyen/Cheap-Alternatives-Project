// Your web app's Firebase configuration
var firebaseConfig = {

  // your api keys etc.
  // copy a chunk of code from firebase console and paste here
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Create a reference to the firestore database
const db = firebase.firestore();