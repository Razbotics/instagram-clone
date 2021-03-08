import { API_KEY } from "@env";
import firebaseLib from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "instagram-clone-771e3.firebaseapp.com",
  projectId: "instagram-clone-771e3",
  storageBucket: "instagram-clone-771e3.appspot.com",
  messagingSenderId: "784311896120",
  appId: "1:784311896120:web:1e6edbc32ea52c3aeffecd",
};

if (!firebaseLib.apps.length) firebaseLib.initializeApp(firebaseConfig);
else firebaseLib.app();

export const firebase = firebaseLib;
export const db = firebaseLib.firestore();
