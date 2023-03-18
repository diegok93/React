import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB46DfKa4kZFS5-wJ8i-0qz2SXCRcDX93A",
  authDomain: "demister-96be9.firebaseapp.com",
  projectId: "demister-96be9",
  storageBucket: "demister-96be9.appspot.com",
  messagingSenderId: "1077228072020",
  appId: "1:1077228072020:web:d8ea5e37b12dffd20011c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)