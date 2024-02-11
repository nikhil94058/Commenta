import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6Z_ex_gIwTeBXsdam-ypRenlFbGGCOPs",
  authDomain: "project-b6563.firebaseapp.com",
  projectId: "project-b6563",
  storageBucket: "project-b6563.appspot.com",
  messagingSenderId: "605918149855",
  appId: "1:605918149855:web:46d6f5e36e6a419f763d6a"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);