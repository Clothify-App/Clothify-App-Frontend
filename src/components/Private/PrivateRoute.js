import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn() ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
