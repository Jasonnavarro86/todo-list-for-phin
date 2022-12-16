const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDjm-5GtB-DXsSOCWfNmaER2iNrUpoCLVo",
  authDomain: "phin-todo-list-by-jason.firebaseapp.com",
  projectId: "phin-todo-list-by-jason",
  storageBucket: "phin-todo-list-by-jason.appspot.com",
  messagingSenderId: "178723562702",
  appId: "1:178723562702:web:265ab40c9ac1cd988c9c9f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = {
  db
}