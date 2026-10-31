import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import useIsAuthorized from "../../hooks/useIsAuthorized";

const ProtectedRouteUser = () => {

  const { isAuthorized, loading } = useIsAuthorized();
  



  if (loading) {
    return null; // or a spinner
  }
 

  if (isAuthorized === null) return <p>Loading...</p>;

  if (!isAuthorized) return <Navigate to="/" replace />;

  // if(isAuthorized) return <Navigate to="/user" replace />
  

  // Supports both layout-wrapping and outlet-based routing
  return <Outlet />;
};

export default ProtectedRouteUser;
