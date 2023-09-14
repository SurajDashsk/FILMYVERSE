import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDajTv79OIRAByJD-W4eF4Yh_e3ByrmL64",
  authDomain: "filmyverse-1a7a6.firebaseapp.com",
  projectId: "filmyverse-1a7a6",
  storageBucket: "filmyverse-1a7a6.appspot.com",
  messagingSenderId: "407527142757",
  appId: "1:407527142757:web:cf9932a579e7e09b8d5d8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;