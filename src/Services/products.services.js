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

const productsRef = collection(db, "products");
class ProductServices {
  addProduct = (newProduct) => {
    return addDoc(productsRef, newProduct);
  };

  updateProduct = (id, updatedProduct) => {
    const productDoc = doc(db, "products", id);
    return updateDoc(productDoc, updatedProduct);
  };

  deleteProduct = (id) => {
    const productDoc = doc(db, "products", id);
    return deleteDoc(productDoc);
  };

  getAllProducts = () => {
    return getDocs(productsRef);
  };

  getProduct = (id) => {
    const product = doc(db, "products", id);
    return getDoc(product);
  };

  getMyProducts = (email) => {
    const q = query(collection(db, "products"), where("email", "==", email));
    return getDocs(q);
  };

  getProductById = (list_Id) => {
    const q = query(collection(db, "products"), where("uid", "in", list_Id));
    return getDocs(q);
  };

  // const exactlyOneCoast = await citiesRef.where('regions', 'in',
  //   [['west_coast', 'east_coast']]).get();
}

export default new ProductServices();
