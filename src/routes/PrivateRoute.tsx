import { Navigate, Outlet } from "react-router-dom";
interface IPrivateRouteProps {
  children?: React.ReactNode;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = () => {
  const auth = {
    isLoading: false,
    isAuthenticated: true,
    user: { username: "user01" },
  };
  return <>{auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
