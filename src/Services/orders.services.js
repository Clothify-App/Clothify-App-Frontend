import { db } from "../firebaseConfig";
import { useAuth } from "../Context/AuthContext";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  where,
  deleteDoc,
  query,
  updateDoc,
  doc,
} from "firebase/firestore";

const productsRef = collection(db, "orders");
class OrderServices {
  deleteProduct = (id) => {
    const productDoc = doc(db, "products", id);
    return deleteDoc(productDoc);
  };

  getAllProducts = () => {
    return getDocs(productsRef);
  };

  getOrder = (id) => {
    const product = doc(db, "orders", id);
    return getDoc(product);
  };

  getMyOrders = (email) => {
    const q = query(collection(db, "orders"), where("email", "==", email));
    return getDocs(q);
  };
}

export default new OrderServices();
