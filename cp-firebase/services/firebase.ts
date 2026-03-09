import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDvgExswN3Ond1Jd4j-eCVSrL4-4Uy_zvs",
  authDomain: "cp-01-9fecd.firebaseapp.com",
  projectId: "cp-01-9fecd",
  storageBucket: "cp-01-9fecd.firebasestorage.app",
  messagingSenderId: "24775277788",
  appId: "1:24775277788:web:61203095dcf82e4de2c819",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
