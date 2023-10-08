import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfigSecret = {
    firebaseConfig
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



