import { useContext } from "react";
import { Context } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(Context);
  const location = useLocation();
  console.log("location",location.pathname);
  
  if (loading) {
    return (
      <div className="text-center content-center h-screen">
        <span className="loading loading-infinity loading-xs"></span>
        <span className="loading loading-infinity loading-sm"></span>
        <span className="loading loading-infinity loading-md"></span>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

export default PrivateRoute;
