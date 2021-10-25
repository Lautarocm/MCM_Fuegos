import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import { getFirestore } from "firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCKedEc-0b8XftEo2m9bZ8Uszve9zE7HeE",
  authDomain: "mcm-fuegos-84410.firebaseapp.com",
  projectId: "mcm-fuegos-84410",
  storageBucket: "mcm-fuegos-84410.appspot.com",
  messagingSenderId: "439311337458",
  appId: "1:439311337458:web:440ff20c4421a9fe300d6b",
  measurementId: "G-1PNME3XZY2"
})

export const db = getFirestore(app)


