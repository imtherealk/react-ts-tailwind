import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const LoginPage = React.lazy(() => import("../pages/LoginPage"));
// const LoadingPage = React.lazy(() => import("../pages/LoadingPage"));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
};
export default AppRoutes;
