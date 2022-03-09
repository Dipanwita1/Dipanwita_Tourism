import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';
function Protected ()  {
  
    
        const isTokenAuth=window.sessionStorage.getItem("Token:")
           return isTokenAuth ? <Outlet/>: <Navigate to ="/unauth"/>;
 
  
}

export default Protected