// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAaUEtpCLq9MwHsk5ROme_2fKqO612m1wA',
  authDomain: 'refubook-24759.firebaseapp.com',
  projectId: 'refubook-24759',
  storageBucket: 'refubook-24759.appspot.com',
  messagingSenderId: '955695332549',
  appId: '1:955695332549:web:a488a54026aeb77c1c04ac',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

export const auth = getAuth(app);
