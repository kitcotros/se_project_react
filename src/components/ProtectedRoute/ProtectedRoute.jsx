import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, isAuthLoading, children }) {
  if (isAuthLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    // If user isn't logged in, return a Navigate component that sends the user to /login
    return <Navigate to="/" replace />;
  }

  // Otherwise, render the protected route's child component.
  return children;
}

export default ProtectedRoute;
