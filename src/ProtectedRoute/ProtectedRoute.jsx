import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return component;
};

export default ProtectedRoute;
