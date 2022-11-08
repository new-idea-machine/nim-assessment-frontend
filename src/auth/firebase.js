// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOIbgA3xeS69vfxhStYw4nZQ2w0hOo8LI",
  authDomain: "nim-assessments-6ba36.firebaseapp.com",
  projectId: "nim-assessments-6ba36",
  storageBucket: "nim-assessments-6ba36.appspot.com",
  messagingSenderId: "389444801090",
  appId: "1:389444801090:web:9e91944bf7d02c422e53db"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
