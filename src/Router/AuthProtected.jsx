import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contaxt/AuthProvider";

const AuthProtected = ({ children }) => {
  const location = useLocation();

  const { user } = useContext(AuthContext);
  if (user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AuthProtected;
