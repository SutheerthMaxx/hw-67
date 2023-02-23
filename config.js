import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEC7HfZZQleAH-3LnXR3B0ZuXtwXqNMdQ",
    authDomain: "classtest-7f6ff.firebaseapp.com",
    projectId: "classtest-7f6ff",
    storageBucket: "classtest-7f6ff.appspot.com",
    messagingSenderId: "508035970061",
    appId: "1:508035970061:web:bc06cea325f05e60f5d144",
    measurementId: "G-V0JB6S6JLE"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();