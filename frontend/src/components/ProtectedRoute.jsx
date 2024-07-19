// import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const ProtectedRoute = () => {
  const authToken = localStorage.getItem('username')
//   console.log(authToken)

  return authToken ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;