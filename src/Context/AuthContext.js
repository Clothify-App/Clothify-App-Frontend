import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import firebase from "firebase/compat/app";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [userID, setUserID] = useState(localStorage.getItem("userID"));
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function signUpWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  }

  function signUpWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    return auth.signInWithPopup(provider);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function isLoggedIn() {
    if (localStorage.getItem("userID")) {
      return true;
    } else {
      return false;
    }
  }

  function logout() {
    localStorage.removeItem("userID");
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userID,
    setUserID,
    signup,
    isLoggedIn,
    login,
    logout,
    signUpWithGoogle,
    signUpWithFacebook,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
