import { Navigate } from "react-router-dom";
import { useAuth } from "../features/authentication/AuthContext";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner />
      </div>
    );

  if (!user) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;
