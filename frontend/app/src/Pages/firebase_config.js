// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0IpQTcpHruaUlsn7p--S13AGy3cAGuk4",
  authDomain: "verify-2ab0c.firebaseapp.com",
  projectId: "verify-2ab0c",
  storageBucket: "verify-2ab0c.appspot.com",
  messagingSenderId: "601143642658",
  appId: "1:601143642658:web:8b83044b33906d0fb4987b",
  measurementId: "G-CK0PYKR0K5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;