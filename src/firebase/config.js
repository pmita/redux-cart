import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDoIyh1mJkGp6UBUzc89QXJWAPiJ8elw4c",
    authDomain: "shoppingcart-practice.firebaseapp.com",
    projectId: "shoppingcart-practice", 
    storageBucket: "shoppingcart-practice.appspot.com",
    messagingSenderId: "80165353678",
    appId: "1:80165353678:web:a85f7e45c95b4e57ddb89f"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export default db;