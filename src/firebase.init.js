// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf-Lr4qDQsTYmCaUEQIUTMn5q-L7lNeCY",
  authDomain: "my-blog-24fb8.firebaseapp.com",
  projectId: "my-blog-24fb8",
  storageBucket: "my-blog-24fb8.appspot.com",
  messagingSenderId: "719358450872",
  appId: "1:719358450872:web:358edccdd6ca29f194a84d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;