// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-45c12.firebaseapp.com',
  projectId: 'mern-estate-45c12',
  storageBucket: 'mern-estate-45c12.appspot.com',
  messagingSenderId: '959956438089',
  appId: '1:959956438089:web:cfa4703b014fbc8bec8398',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
