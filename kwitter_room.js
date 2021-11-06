// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8YBN7993DSg-Hf9bCwv5gdqdKSZzctTI",
  authDomain: "kwitter-f3708.firebaseapp.com",
  databaseURL: "https://kwitter-f3708-default-rtdb.firebaseio.com",
  projectId: "kwitter-f3708",
  storageBucket: "kwitter-f3708.appspot.com",
  messagingSenderId: "227502370594",
  appId: "1:227502370594:web:adfdb2628832740d72ff7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
