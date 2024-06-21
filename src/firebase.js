import firebase from 'firebase/compat/app'
import 'firebase/compat/auth' 

const app = firebase.initializeApp({
  apiKey: "AIzaSyBj9V_pl1eznFoMBEcTCZh2odQn_PliPyY",

  authDomain: "auth-development-34487.firebaseapp.com",

  projectId: "auth-development-34487",

  storageBucket: "auth-development-34487.appspot.com",

  messagingSenderId: "279466889457",

  appId: "1:279466889457:web:a8bfee80f18a9eecb71950"


})

export const auth=app.auth()
export default app

