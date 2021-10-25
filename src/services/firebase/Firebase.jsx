import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import { getFirestore } from "firebase/firestore"

// import { collection, addDoc } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCZYYAf8uq0J4dPvkb1XXCGcHW-simtc2U",
  authDomain: "mcm-fuegos-b54c0.firebaseapp.com",
  projectId: "mcm-fuegos-b54c0",
  storageBucket: "mcm-fuegos-b54c0.appspot.com",
  messagingSenderId: "977421898954",
  appId: "1:977421898954:web:27f9f8b2562aa755b0d033",
  measurementId: "G-W7EZ4XMZZ0"
})

export const db = getFirestore(app)


// const storage = app.storage()

// const tabla1Ref = storage.refFromURL("gs://mcm-fuegos-b54c0.appspot.com/images/tabla1.jpg")
// tabla1Ref.getDownloadURL().then(url => console.log(url))

// const tabla2Ref = storage.refFromURL("gs://mcm-fuegos-b54c0.appspot.com/images/tabla2.jpg")
// tabla2Ref.getDownloadURL().then(url => console.log(url))

// const tabla3Ref = storage.refFromURL("gs://mcm-fuegos-b54c0.appspot.com/images/tabla3.jpg")
// tabla3Ref.getDownloadURL().then(url => console.log(url))

// const braseroRef = storage.refFromURL("gs://mcm-fuegos-b54c0.appspot.com/images/brasero.jpg")
// braseroRef.getDownloadURL().then(url => console.log(url))

// let tabla1URL = "https://firebasestorage.googleapis.com/v0/b/mcm-fuegos-b54c0.appspot.com/o/images%2Ftabla1.jpg?alt=media&token=72b8966d-dd40-476b-a43a-4408f49fd821"
// let tabla2URL = "https://firebasestorage.googleapis.com/v0/b/mcm-fuegos-b54c0.appspot.com/o/images%2Ftabla2.jpg?alt=media&token=8070dc9c-5190-4d0b-95b9-5d60e7150424"
// let tabla3URL = "https://firebasestorage.googleapis.com/v0/b/mcm-fuegos-b54c0.appspot.com/o/images%2Ftabla3.jpg?alt=media&token=7f49b1aa-12e6-417e-a707-248fbd177a12"
// let braseroURL = "https://firebasestorage.googleapis.com/v0/b/mcm-fuegos-b54c0.appspot.com/o/images%2Fbrasero.jpg?alt=media&token=71f52fb1-172b-437c-9ea3-aaca223c8a55"


// addDoc(collection(db, "products"), {
//   category: "tablas",
//   title: "tabla 1",
//   shortDesc: "tabla de asado",
//   longDesc: "tabla de asado hecha en maderas de guayubira y guatambú. Las dimensiones son 40x50x4 cm. Tiene manijas y canaleta para jugos",
//   price: 13000,
//   pictureUrl: tabla1URL,
//   stock: 2
// })
// addDoc(collection(db, "products"), {
//   category: "tablas",
//   title: "tabla 2",
//   shortDesc: "tabla de asado",
//   longDesc: "tabla de asado hecha en maderas de guayubira y guatambú. Las dimensiones son 40x50x4 cm. Tiene manijas y canaleta para jugos",
//   price: 6500,
//   pictureUrl: tabla2URL,
//   stock: 3
// })
// addDoc(collection(db, "products"), {
//   category: "tablas",
//   title: "tabla 3",
//   shortDesc: "tabla de asado",
//   longDesc: "tabla de asado hecha en maderas de guayubira y guatambú. Las dimensiones son 40x50x4 cm. Tiene manijas y canaleta para jugos",
//   price: 10000,
//   pictureUrl: tabla3URL,
//   stock: 4
// })
// addDoc(collection(db, "products"), {
//   category: "braseros",
//   title: "brasero 1",
//   shortDesc: "brasero encastrable",
//   longDesc: "brasero hecho en chapa de 3,2mm desmontable, con parrilla incluida. Las dimensiones son 60x60x40cm",
//   price: 19500,
//   pictureUrl: braseroURL,
//   stock: 4
// })