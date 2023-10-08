import { collection, getDocs } from "firebase/firestore";
import {db} from "@/utils/firebase";

export async function readData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
}
