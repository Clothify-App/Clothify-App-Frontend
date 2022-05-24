import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return localStorage.getItem("userID") ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
