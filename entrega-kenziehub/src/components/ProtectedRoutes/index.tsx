import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

const ProtectedRoutes = () => {
  const { loading, token } = useUserContext();
  const location = useLocation();

  if (loading) {
    return <div>Carregando...</div>;
  }

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
