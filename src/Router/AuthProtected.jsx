import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contaxt/AuthProvider";

const AuthProtected = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="bg-dark md:h-[92vh] h-[92vh] w-[99%] mx-auto rounded-lg flex item-center justify-center">
        <p className="my-auto">
          <progress className="progress w-56 bg-yellow-300"></progress>
        </p>
      </div>
    );
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AuthProtected;
