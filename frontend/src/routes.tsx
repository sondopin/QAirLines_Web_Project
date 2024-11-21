import { useRoutes, Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context/app.context";
import { PATH } from "./constants/path";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import Error from "./pages/Error";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Layout from "./layouts/Layout";
import LatestNews from "./components/LatestNews";
import Home from "./pages/Home";

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

function AdminRoute() {
  const { isAdmin, isAuthenticated } = useContext(AppContext);
  return isAdmin && isAuthenticated ? (
    <Outlet />
  ) : (
    <Error message="You are not admin" />
  );
}

export default function createRoutes() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router_elements = useRoutes([
    {
      path: "",
      element: <ProtectedRoute />,
    },
    {
      path: PATH.admin.base,
      element: <AdminRoute />,
    },
    {
      path: "",
      element: <RejectedRoute />,
      children: [
        {
          path: PATH.login,
          element: <LoginPage />,
        },
        {
          path: PATH.register,
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: PATH.home,
      index: true,
      element: <Layout>
        <Home />
      </Layout>,
    },
  ]);

  return router_elements;
}
