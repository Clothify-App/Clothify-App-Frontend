import { db } from "../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";

const userRef = collection(db, "users");

class usersServices {
  addUser = (newUser) => {
    return addDoc(userRef, newUser);
  };

  // updateUser = (id, updatedUser) => {
  //   const user = doc(db, "users", id);
  //   return updateDoc(user, updatedUser);
  // };

  // getMyProducts = (email) => {
  //   const q = query(collection(db, "products"), where("email", "==", email));
  //   return getDocs(q);
  // };

  checkIfUserExist = (email) => {
    const q = query(collection(db, "users"), where("email", "==", email));
    return getDocs(q);
  };

  UpdateUser = (id, updatedUser) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updatedUser);
  };

  getUserByEmail = (email) => {
    let q = query(collection(db, "users"), where("email", "==", email));
    return getDocs(q);
  };

  getUser = (id) => {
    const user = doc(db, "users", id);
    return getDoc(user);
  };
}

export default new usersServices();
