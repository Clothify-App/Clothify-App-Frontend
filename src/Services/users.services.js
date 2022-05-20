import { db } from "../firebaseConfig";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";

const userRef = collection(db, "users");

class UserServices {
  addUser = (newUser) => {
    return addDoc(userRef, newUser);
  };

  updateUser = (id, updatedUser) => {
    const user = doc(db, "users", id);
    return updateDoc(user, updatedUser);
  };

  getUser = (id) => {
    const user = doc(db, "users", id);
  };
}

export default new UserServices();
