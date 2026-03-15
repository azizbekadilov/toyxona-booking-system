import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const isAdmin = true; // keyin backend bilan tekshiriladi

  if (!isAdmin) {
    return <Navigate to="/hall/1" />;
  }

  return children;
}

export default ProtectedRoute;