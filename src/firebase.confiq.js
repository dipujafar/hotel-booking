// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApu7yIM3DO_n34iCK27GhuX-ffX_sPHac",
  authDomain: "hotel-booking-38b24.firebaseapp.com",
  projectId: "hotel-booking-38b24",
  storageBucket: "hotel-booking-38b24.appspot.com",
  messagingSenderId: "790970969396",
  appId: "1:790970969396:web:b949e04c7264c4b1fe0961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;